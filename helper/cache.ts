import NodeCache from 'node-cache';

export class LocalCache {
  private static instance: LocalCache;

  private cache: NodeCache;

  private constructor() {
    this.cache = new NodeCache({ stdTTL: 3600, maxKeys: 100 });
  }

  public static getInstance(): LocalCache {
    if (!LocalCache.instance) {
      LocalCache.instance = new LocalCache();
    }
    return LocalCache.instance;
  }

  public set(key: string, value: any): void {
    this.cache.set(key, value);
  }

  public get(key: string): any {
    return this.cache.get(key);
  }
}
