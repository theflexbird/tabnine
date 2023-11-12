import Redis from 'ioredis';

export default class Queue
{
    private static _instance: Queue;
    private redis: Redis;

    private constructor()
    {
        this.redis = new Redis();
    }

    public addMessage(queueName: string, message: any)
    {
        this.redis.lpush(queueName, message);
    }

    public async getMessage(queueName: string)
    {
        const message = await this.redis.rpop(queueName);
        return message;
    }

    public static get Instance()
    {
        return this._instance || (this._instance = new this());
    }
}
