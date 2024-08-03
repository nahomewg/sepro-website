export const NAV_LINKS = [
    { href: '/training', id: 'training', label: 'Training'},
    { href: '/blog', id: 'blog', label: 'Blog'},
    { href: '/', id: 'testimonials', label: 'Testimonials'},
    { href: '/contact', id: 'contact', label: 'Contact'},
]

export const DUMMY_BLOGS : Blog[] = [
    { title: '10 tips for losing weight', id: 1, body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', image: '/ropes.png', created_at: '2022-01-01', additionalResources: [{ title: 'Video Link', id: 1, blogId: 1, link: 'https://youtube.com'}, { title: 'Amazon Link', id: 2, blogId: 1, link: 'https://amazon.com'}, { title: 'Etsy Link', id: 3, blogId: 1, link: 'https://etsy.com' }] },
    { title: '10 tips for losing weight', id: 2, body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', image: '/ropes.png', created_at: '2022-01-01' },
    { title: '10 tips for losing weight', id: 3, body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', image: '/ropes.png', created_at: '2022-01-01' },
    { title: '10 tips for losing weight', id: 4, body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', image: '/ropes.png', created_at: '2022-01-01' },
    { title: '10 tips for losing weight', id: 5, body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', image: '/ropes.png', created_at: '2022-01-01' },
    { title: '10 tips for losing weight', id: 6, body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', image: '/ropes.png', created_at: '2022-01-01' },
    { title: '10 tips for losing weight', id: 7, body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', image: '/ropes.png', created_at: '2022-01-01' },
    { title: '10 tips for losing weight', id: 8, body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', image: '/ropes.png', created_at: '2022-01-01' },
]

export const DUMMY_TESTIMONIALS : Testimonial[] = [
    { full_name: 'Nahome Giorgis', id: '1', body: 'Awesome trainer! Very knowledgeable on many different exercises and movements. Awesome trainer! Very knowledgeable on many different exercises and movements.', rating: 5},
    { full_name: 'Homie George', id: '2', body: 'Awesome trainer! Very knowledgeable on many different exercises and movements.', rating: 4},
    { full_name: 'Homer Simpson', id: '3', body: 'Awesome trainer!', rating: 5},
    { full_name: 'George Homerson', id: '4', body: 'Awesome trainer! Very knowledgeable on many different exercises and movements.', rating: 5},
    { full_name: 'Georgio Homersimperson', id: '5', body: 'Awesome trainer! Very knowledgeable on many different exercises and movements.', rating: 5},
    { full_name: 'Nahome Giorgis', id: '6', body: 'Awesome trainer! Very knowledgeable on many different exercises and movements.', rating: 3},
    { full_name: 'Nahome Giorgis', id: '7', body: 'Awesome trainer! Very knowledgeable on many different exercises and movements.', rating: 5},
    { full_name: 'Nahome Giorgis', id: '8', body: 'Awesome trainer! Very knowledgeable on many different exercises and movements.', rating: 4},
]

export const DUMMY_QUESTIONS : Questions[] = [
    { question: 'What colour is the sky?', id: '1', questionType: 'multiple', options: [{ option: 'Red', id: '1' }, { option: 'Blue', id: '2' }, { option: 'Green', id: '3' }, { option: 'Yellow', id: '4' }] },
    { question: 'How to lose weight?', id: '2', questionType: 'input' },
    { question: 'How much weight do you want to lose?', id: '3', questionType: 'slider', options: [{ option: '1kg', id: '1' }, { option: '5kg', id: '2' }, { option: '10kg', id: '3' }] },
]

export const DUMMY_TRAINING_INFO : TrainingInfo[] = [
    { title: '10 tips for losing weight', id: '1', description: 'lorum ipsum la di da de do do doooo. Great program for you, sign up to achieve the best version of yourself!', image: '/ropes.png', alt: 'Man with weighted ropes', feature: true, created_at: '2022-01-01' },
    { title: '10 tips for losing weight', id: '2', description: 'lorum ipsum la di da de do do doooo. Great program for you, sign up to achieve the best version of yourself!', image: '/ropes.png', alt: 'Man with weighted ropes', feature: false, created_at: '2022-01-01' },
    { title: '10 tips for losing weight', id: '3', description: 'lorum ipsum la di da de do do doooo. Great program for you, sign up to achieve the best version of yourself!', image: '/ropes.png', alt: 'Man with weighted ropes', feature: false, created_at: '2022-01-01' },
    { title: '10 tips for losing weight', id: '4', description: 'lorum ipsum la di da de do do doooo. Great program for you, sign up to achieve the best version of yourself!', image: '/ropes.png', alt: 'Man with weighted ropes', feature: false, created_at: '2022-01-01' },
    { title: '10 tips for losing weight', id: '5', description: 'lorum ipsum la di da de do do doooo. Great program for you, sign up to achieve the best version of yourself!', image: '/ropes.png', alt: 'Man with weighted ropes', feature: false, created_at: '2022-01-01' },
    { title: '10 tips for losing weight', id: '6', description: 'lorum ipsum la di da de do do doooo. Great program for you, sign up to achieve the best version of yourself!', image: '/ropes.png', alt: 'Man with weighted ropes', feature: false, created_at: '2022-01-01' },
    { title: '10 tips for losing weight', id: '7', description: 'lorum ipsum la di da de do do doooo. Great program for you, sign up to achieve the best version of yourself!', image: '/ropes.png', alt: 'Man with weighted ropes', feature: false, created_at: '2022-01-01' },
    { title: '10 tips for losing weight', id: '8', description: 'lorum ipsum la di da de do do doooo. Great program for you, sign up to achieve the best version of yourself!', image: '/ropes.png', alt: 'Man with weighted ropes', feature: false, created_at: '2022-01-01' },
]
