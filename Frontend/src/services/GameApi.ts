import { PlayState, Category, SubmissionResultWithMessage, SubmissionResult, CurrentQuestion } from '@/ResponseTypes';
import { request } from "../services/Request";

class GameApi {

    private endpoint = "/Game";

    async HasJoker(): Promise<boolean> {
        const res = await request.get<boolean>(`${this.endpoint}/HasJoker`);
        return res.data;
    }

    async UseJoker(): Promise<void> {
        await request.post<void>(`${this.endpoint}/UseJoker`);
    }

    async CurrentState(): Promise<PlayState> {
        const res = await request.get<PlayState>(`${this.endpoint}/CurrentState`);
        return res.data;
    }

    async StartGame(categories: Category[]): Promise<void> {
        await request.post<void>(`${this.endpoint}/StartGame`, 
        JSON.stringify(categories),
        {
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }

    async SubmitAnswer(answerId: number): Promise<SubmissionResultWithMessage> {
        const res = await request.post<SubmissionResultWithMessage>(`${this.endpoint}/SubmitAnswer`, JSON.stringify(answerId));
        return res.data;
    }

    async GetCurrentQuestion(): Promise<CurrentQuestion> {
        const res = await request.get<CurrentQuestion>(`${this.endpoint}/CurrentQuestion`);
        return res.data;
    }
}

export default new GameApi();