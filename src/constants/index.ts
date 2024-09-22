import { IBlog } from "@/app/interfaces/blog.interface"
import { Question } from "@/app/interfaces/questions.interface"
import { Testimonial } from "@/app/interfaces/testimonial.interface"
import { ITrainingInfo } from "@/app/interfaces/training.interface"

// IMPORTANT: DO NOT CHANGE THE ORDER OF THE NAV LINKS
export const NAV_LINKS = [
    { href: '/training', id: 'training', label: 'Training', 
        // children: [
        //     {href: '/training/programs', id: 'programs', label: 'SE Training Programs'}, 
        //     {href: '/training/packages', id: 'packages', label: 'Training Packages'}
        // ]
    },
    { href: '/blog', id: 'blog', label: 'Blog'},
    { href: '/testimonials', id: 'testimonials', label: 'Testimonials'},
    { href: '/contact', id: 'contact', label: 'Contact', 
        // children: [
        //     {href: '/contact/about', id: 'about', label: 'About Us'}, 
        //     {href: '/contact', id: 'contactUs', label: 'Contact Us'}
        // ]
    },
]

export const DUMMY_BLOGS : IBlog[] = [
    { title: '10 tips for losing weight', id: '1', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', image: '/ropes.png', created_at: '2022-01-01', additionalResources: [{ title: 'Video Link', id: '1', blogId: '1', link: 'https://youtube.com'}, { title: 'Amazon Link', id: '2', blogId: '1', link: 'https://amazon.com'}, { title: 'Etsy Link', id: '3', blogId: '1', link: 'https://etsy.com' }] },
    { title: '10 tips for losing weight', id: '2', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', image: '/ropes.png', created_at: '2022-01-01' },
    { title: '10 tips for losing weight', id: '3', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', image: '/ropes.png', created_at: '2022-01-01' },
    { title: '10 tips for losing weight', id: '4', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', image: '/ropes.png', created_at: '2022-01-01' },
    { title: '10 tips for losing weight', id: '5', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', image: '/ropes.png', created_at: '2022-01-01' },
    { title: '10 tips for losing weight', id: '6', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', image: '/ropes.png', created_at: '2022-01-01' },
    { title: '10 tips for losing weight', id: '7', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', image: '/ropes.png', created_at: '2022-01-01' },
    { title: '10 tips for losing weight', id: '8', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', image: '/ropes.png', created_at: '2022-01-01' },
]

export const DUMMY_TESTIMONIALS : Testimonial[] = [
    { title: 'Nahome Giorgis', id: '1', body: 'Awesome trainer! Very knowledgeable on many different exercises and movements. Awesome trainer! Very knowledgeable on many different exercises and movements.', rating: 5, created_at: '2022-01-01' },
    { title: 'Homie George', id: '2', body: 'Awesome trainer! Very knowledgeable on many different exercises and movements.', rating: 4, created_at: '2022-01-01'},
    { title: 'Homer Simpson', id: '3', body: 'Awesome trainer!', rating: 5},
    { title: 'George Homerson', id: '4', body: 'Awesome trainer! Very knowledgeable on many different exercises and movements.', rating: 5, created_at: '2022-01-01'},
    { title: 'Georgio Homersimperson', id: '5', body: 'Awesome trainer! Very knowledgeable on many different exercises and movements.', rating: 5, created_at: '2022-01-01'},
    { title: 'Nahome Giorgis', id: '6', body: 'Awesome trainer! Very knowledgeable on many different exercises and movements.', rating: 3, created_at: '2022-01-01'},
    { title: 'Nahome Giorgis', id: '7', body: 'Awesome trainer! Very knowledgeable on many different exercises and movements.', rating: 5, created_at: '2022-01-01'},
    { title: 'Nahome Giorgis', id: '8', body: 'Awesome trainer! Very knowledgeable on many different exercises and movements.', rating: 4, created_at: '2022-01-01'},
]

export const DUMMY_TRAINING_INFO : ITrainingInfo[] = [
    { title: '10 tips for losing weight', id: '1', description: 'lorum ipsum la di da de do do doooo. Great program for you, sign up to achieve the best version of yourself!', image: '/ropes.png', alt: 'Man with weighted ropes', feature: true, created_at: '2022-01-01' },
    { title: '10 tips for losing weight', id: '2', description: 'lorum ipsum la di da de do do doooo. Great program for you, sign up to achieve the best version of yourself!', image: '/ropes.png', alt: 'Man with weighted ropes', feature: false, created_at: '2022-01-01' },
    { title: '10 tips for losing weight', id: '3', description: 'lorum ipsum la di da de do do doooo. Great program for you, sign up to achieve the best version of yourself!', image: '/ropes.png', alt: 'Man with weighted ropes', feature: false, created_at: '2022-01-01' },
    { title: '10 tips for losing weight', id: '4', description: 'lorum ipsum la di da de do do doooo. Great program for you, sign up to achieve the best version of yourself!', image: '/ropes.png', alt: 'Man with weighted ropes', feature: false, created_at: '2022-01-01' },
    { title: '10 tips for losing weight', id: '5', description: 'lorum ipsum la di da de do do doooo. Great program for you, sign up to achieve the best version of yourself!', image: '/ropes.png', alt: 'Man with weighted ropes', feature: false, created_at: '2022-01-01' },
    { title: '10 tips for losing weight', id: '6', description: 'lorum ipsum la di da de do do doooo. Great program for you, sign up to achieve the best version of yourself!', image: '/ropes.png', alt: 'Man with weighted ropes', feature: false, created_at: '2022-01-01' },
    { title: '10 tips for losing weight', id: '7', description: 'lorum ipsum la di da de do do doooo. Great program for you, sign up to achieve the best version of yourself!', image: '/ropes.png', alt: 'Man with weighted ropes', feature: false, created_at: '2022-01-01' },
    { title: '10 tips for losing weight', id: '8', description: 'lorum ipsum la di da de do do doooo. Great program for you, sign up to achieve the best version of yourself!', image: '/ropes.png', alt: 'Man with weighted ropes', feature: false, created_at: '2022-01-01' },
]

export const READINESS_QUIZ : Question[] = [
    {
        id: '1',
        questionText: 'Body Type',
        questionType: 'multiple',
        options: [
            { id: '1', optionText: 'Skinny' },
            { id: '2', optionText: 'Average' },
            { id: '3', optionText: 'Heavy' },
        ]
    },
    {
        id: '2',
        questionText: 'Age',
        questionType: 'slider',
        options: [
            { id: '1', optionText: '10-18' },
            { id: '2', optionText: '18-28' },
            { id: '3', optionText: '28-40' },
            { id: '4', optionText: '40-50' },
            { id: '5', optionText: '60-70' },
            { id: '6', optionText: '70 <' },
        ]
    },
    {
        id: '3',
        questionText: 'Weight(lbs)',
        questionType: 'input'
    },
    {
        id: '4',
        questionText: 'Name',
        questionType: 'input',
    },
    {
        id: '5',
        questionText: 'Email',
        questionType: 'input',
    },
    {
        id: '6',
        questionText: 'Program Options',
        questionType: 'multiple',
        options: [
            { id: '1', optionText: 'Need Help 1 on 1' },
            { id: '2', optionText: 'Ready To Get Started' },
        ]
    }
]

export const BUILD_QUIZ : Question[] = [
    {
        id: '1',
        questionText: 'Goal',
        questionType: 'multiple',
        options: [
            { id: '1', optionText: 'Lose Weight - Slim', },
            { id: '2', optionText: 'Gain Muscle - Body Builder', },
            { id: '3', optionText: 'Optimal Health - Athletic' },
            { id: '4', optionText: 'Optimal Health - Runner`s Body' },
        ]
    },
    {
        id: '2',
        questionText: 'Age',
        questionType: 'slider',
        options: [
            { id: '1', optionText: '10-18' },
            { id: '2', optionText: '18-28' },
            { id: '3', optionText: '28-40' },
            { id: '4', optionText: '40-50' },
            { id: '5', optionText: '60-70' },
            { id: '6', optionText: '70 <' },
        ]
    },
    {
        id: '3',
        questionText: 'Body Type',
        questionType: 'multiple',
        options: [
            { id: '1', optionText: 'Skinny' },
            { id: '2', optionText: 'Average' },
            { id: '3', optionText: 'Heavy' },
        ]
    },
    {
        id: '4',
        questionText: 'Choose Your Body Fat %',
        questionType: 'slider',
        options: [
            { id: '1', optionText: '5-9' },
            { id: '2', optionText: '9-15' },
            { id: '3', optionText: '15-20' },
            { id: '4', optionText: '20-25' },
            { id: '5', optionText: '25-30' },
            { id: '6', optionText: '30 <' },
        ]
    },
    {
        id: '5',
        questionText: 'Name',
        questionType: 'input',
    },
    {
        id: '6',
        questionText: 'Email',
        questionType: 'input',
    },
    {
        id: '7',
        questionText: 'Program Options',
        questionType: 'multiple',
        options: [
            { id: '1', optionText: 'Need Help? Connect 1 on 1' },
            { id: '2', optionText: 'Program Level - Beginner' },
            { id: '3', optionText: 'Program Level - Intermediate' },
            { id: '4', optionText: 'Program Level - Advanced' },
        ]
    }
]

export const PROGRAM_QUIZ : Question[] = [
    {
        id: '1',
        questionText: 'Type of Training',
        questionType: 'multiple',
        options: [
            { id: '1', optionText: 'Lose Weight' },
            { id: '2', optionText: 'Build Muscle' },
            { id: '3', optionText: 'Hybrid Training' },
            { id: '4', optionText: 'Functional Training' },
        ]
    },
    {
        id: '2',
        questionText: 'Activity Frequency (Times/Week)',
        questionType: 'slider',
        options: [
            { id: '1', optionText: '0' },
            { id: '2', optionText: '1-2' },
            { id: '3', optionText: '3-4' },
            { id: '4', optionText: '5+' },
        ]
    },
    {
        id: '3',
        questionText: 'What Type of Activity Do You Do? (Select all that apply)',
        questionType: 'multiple',
        options: [
            { id: '1', optionText: 'No Acitvity/Mostly Walking' },
            { id: '2', optionText: 'Cardio' },
            { id: '3', optionText: 'Strength Training' },
            { id: '4', optionText: 'High Intensity Interval Training' },
        ]
    },
    {
        id: '4',
        questionText: 'Readiness Level - On a Scale of 1-10, How Ready Are You to Make This Change Happen?',
        questionType: 'slider',
        options: [
            { id: '1', optionText: '1' },
            { id: '2', optionText: '2' },
            { id: '3', optionText: '3' },
            { id: '4', optionText: '4' },
            { id: '5', optionText: '5' },
            { id: '6', optionText: '6' },
            { id: '7', optionText: '7' },
            { id: '8', optionText: '8' },
            { id: '9', optionText: '9' },
            { id: '10', optionText: '10' },
        ]
    },
    {
        id: '5',
        questionText: 'Program Difficulty',
        questionType: 'multiple',
        options: [
            { id: '1', optionText: 'Beginner' },
            { id: '2', optionText: 'Intermediate' },
            { id: '3', optionText: 'Advanced' },
        ]
    }
]


