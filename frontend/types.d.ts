export type Word = {
  id: string;
  word: string;
  type: string;
  gender: string;
  plural: string;
  level: string;
  definition: string;
  examples: string[];
};

export type Verb = {
  id: string;
  verb: string;
  tense: string;
  mood: string;
  forms: string[];
};
