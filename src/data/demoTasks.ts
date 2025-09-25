export interface DemoTask {
  id: string;
  prompt: string;
  choices: string[];
}

export const DEMO_TASKS: DemoTask[] = [
  { 
    id: 'q1', 
    prompt: 'Hva er 18 % av 200?', 
    choices: ['36', '40', '56', '176'] 
  },
  { 
    id: 'q2', 
    prompt: 'Pris øker fra 400 til 500. Hvor mange %?', 
    choices: ['15 %', '20 %', '25 %', '30 %'] 
  },
  { 
    id: 'q3', 
    prompt: 'Hva er 7·8?', 
    choices: ['48', '56', '63', '72'] 
  },
];