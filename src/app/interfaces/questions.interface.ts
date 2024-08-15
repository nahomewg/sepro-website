export interface Question {
    id: string;
    questionText: string;
    questionType: 'multiple' | 'input' | 'slider';
    options?: Option[];
    nextQuestion?: Question;
}

export interface Option {
    id: string;
    optionText: string;
    image?: string;
    alt?: string;
    nextQuestion?: Question;
}

