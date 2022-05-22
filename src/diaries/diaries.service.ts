require('./mongo.service');
import Diary from './Diary.schema';
import { BaseDiary, DiaryModel } from './diary.interface';

export const findAll = async (): Promise<DiaryModel[]> => {
  return await Diary.find({});
};

export const findById = async (id: Record<string, unknown>): Promise<DiaryModel | null> => {
  return await Diary.findById(id);
};

export const update = async (
  id: Record<string, unknown>,
  updatedDiary: BaseDiary
) => {
  const diary = updatedDiary;
  const result = await Diary.updateOne(id, { $set: diary });
  return result;
};

export const create = async (newDiary: BaseDiary): Promise<DiaryModel> => {
  const result = new Diary({
    date: newDiary.date,
    weather: newDiary.weather,
    mood: newDiary.mood,
    comment: newDiary.comment
  });
  return await result.save();
};

export const remove = async (id: Record<string, unknown>) => {
  await Diary.deleteOne(id);
};
