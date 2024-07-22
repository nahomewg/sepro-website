interface Questions {
    question: string,
    id: string,
    questionType: 'multiple' | 'input' | 'slider';
    options?: string[];
}