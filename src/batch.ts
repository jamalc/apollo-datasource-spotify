interface Params {
  limit?: number;
  offset?: number;
}

interface Data {
  total: number;
}

interface Options<D> {
  /* Size of each batch call */
  size?: number;
  waitForCallback?: boolean;
  /* Maximum number of items to fetch */
  limit?: number;
  offset?: number;
  request: (params: Params) => Promise<D>;
  callback: (data: D) => Promise<void>;
}

export const batch = async <D extends Data>({
  size = 50,
  waitForCallback = true,
  limit = 50,
  offset = 0,
  request,
  callback,
}: Options<D>): Promise<void> => {
  let pending = limit;
  let params = {
    offset: offset,
    limit: Math.min(size, pending),
  };

  do {
    const data = await request(params);
    const cb = callback(data);
    if (waitForCallback) {
      await cb;
    }

    pending = Math.min(data.total, pending) - size;
    params = {
      offset: params.offset + size,
      limit: Math.min(size, pending),
    };
  } while (pending > 0);
};
