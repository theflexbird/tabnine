export default class Queue
{
    private static _instance: Queue;
    private queues: any;

    private constructor()
    {
        this.queues = {};
    }

    public addMessage(queueName: string, message: any)
    {
        if (!this.queues[queueName])
        {
            this.queues[queueName] = [];
        }
        this.queues[queueName].push(message);
    }

    public getMessage(queueName: string)
    {
        if (!this.queues[queueName])
        {
            return null;
        }
        return this.queues[queueName].shift();
    }

    public static get Instance()
    {

        return this._instance || (this._instance = new this());
    }
}
