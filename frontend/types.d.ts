export type Word = {
  id: string;
  word: string;
  type: string;
  gender: string;
  plural: string;
  level: string;
  definition: string;
  translation: string;
  examples: string[];
};

export type VerbConjugation = {
  id: string;
  tense: string;
  mood: string;
  forms: string[];
};

export type Verb = {
  id: string;
  verb: string;
  conjugations: VerbConjugation[];
};

export type GrammarTopic = {
  id: string;
  title: string;
  body: string;
  level: string;
  examples: string[];
};

export type Phrase = {
  id: string;
  topic: string;
  level: string;
  original: string;
  translation: string;
};

export type PracticeItem =
  | (Word & { type: 'word' })
  | (Verb & { type: 'verb' })
  | (GrammarTopic & { type: 'grammar' })
  | (Phrase & { type: 'phrase' });
