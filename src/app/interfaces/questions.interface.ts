interface Questions {
    question: string,
    id: string,
    questionType: 'multiple' | 'input' | 'slider';
    options?: optionProps[];
}

interface optionProps {
    option: string,
    id: string,
    image?: string
    alt?: string
}