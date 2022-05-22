import { Mood, Weather } from "./diary.enum";

export interface BaseDiary {
  date: string,
  weather: Weather,
  mood: Mood,
  comment: string,
}

export interface DiaryModel extends BaseDiary {
  id: number;
}
