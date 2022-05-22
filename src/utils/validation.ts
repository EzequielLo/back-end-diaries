import { Mood, Weather } from "../diaries/diary.enum";
import { BaseDiary } from "../diaries/diary.interface";

const parseComment = (commentFromRequest: any): string => {
  if (!isString(commentFromRequest)) {
    throw new Error("Incorrect or missing comment");
  }
  return commentFromRequest;
}

const isString = (string: string): boolean => {
  return typeof string === "string"
}

const parseDate = (dateFromRequest: any): string => {
  if (!isString(dateFromRequest) || !isDate(dateFromRequest)) {
    throw new Error("Incorrect or missing date");
  }
  return dateFromRequest;
}

const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date));
}
const parseWeather = (weatherFromRequest: any): Weather => {
  if (!isString(weatherFromRequest) || !isWeather(weatherFromRequest)) {
    throw new Error("Incorrect or missing weather");
  }
  return weatherFromRequest;
}

const isWeather = (params: any): boolean => {
  return Object.values(Weather).includes(params);
}

const parseMood = (moodFromRequest: any): Mood => {
  if (!isString(moodFromRequest) || !isMood(moodFromRequest)) {
    throw new Error("Incorrect or missing mood");
  }
  return moodFromRequest;
}

const isMood = (params: any): boolean => {
  return Object.values(Mood).includes(params);
}

const toNewDiaryEntry = (object: any): BaseDiary => {
  const newEntry: BaseDiary = {
    date: parseDate(object.date),
    weather: parseWeather(object.weather),
    mood: parseMood(object.mood),
    comment: parseComment(object.comment)
  }
  return newEntry;
}


export default toNewDiaryEntry;
