interface Questions {
    question: string,
    id: string,
    questionType: 'multiple' | 'input' | 'slider';
    options?: optionProps[];
    created_at?: string
}

interface optionProps {
    option: string,
    id: string,
    image?: string
    alt?: string
}