// WSU Chemical Engineering Curriculum Course Data
// This file contains all course information for the 4-year plan

export const courseData = {
    'CHE-101': { code: 'CHE 101', name: 'Overview of Chemical Engineering', shortName: 'CHE Overview', credits: 1, type: 'engineering', semester: 'Year 1 Fall', prereqs: [], coreqs: [], alternatives: [], notes: '' },
    'CHEM-105': { code: 'CHEM 105', name: 'Principles of Chemistry I [PSCI]', shortName: 'Gen Chem I (PSCI)', credits: 4, type: 'science', semester: 'Year 1 Fall', prereqs: [], coreqs: ['MATH-171'], alternatives: [], notes: '' },
    'MATH-171': { code: 'MATH 171', name: 'Calculus I [QUAN]', shortName: 'Calc I (QUAN)', credits: 4, type: 'science', semester: 'Year 1 Fall', prereqs: [], coreqs: [], alternatives: [], notes: '' },
    'ENGL-101': { code: 'ENGL 101', name: 'College Composition [WRTG]', shortName: 'Composition (WRTG)', credits: 3, type: 'ucore', semester: 'Year 1 Fall', prereqs: [], coreqs: [], alternatives: [], notes: '' },
    'HIST-105': { code: 'HIST 105', name: 'The Roots of Contemporary Issues [ROOT]', shortName: 'Roots of Issues (ROOT)', credits: 3, type: 'ucore', semester: 'Year 1 Fall', prereqs: [], coreqs: [], alternatives: [], notes: '' },

    'CHE-110': { code: 'CHE 110', name: 'Introduction to Chemical Engineering', shortName: 'Intro to CHE', credits: 2, type: 'engineering', semester: 'Year 1 Spring', prereqs: ['CHE-101', 'MATH-171'], coreqs: ['CHEM-105'], alternatives: [], notes: '' },
    'CHEM-106': { code: 'CHEM 106', name: 'Principles of Chemistry II', shortName: 'Gen Chem II', credits: 4, type: 'science', semester: 'Year 1 Spring', prereqs: ['CHEM-105'], coreqs: [], alternatives: [], notes: '' },
    'BIOLOGY-107': { code: 'BIOLOGY 107', name: 'Introductory Biology: Cell Biology and Genetics [BSCI]', shortName: 'Cell Bio & Gen (BSCI)', credits: 4, type: 'science', semester: 'Year 1 Spring', prereqs: [], coreqs: [], alternatives: [], notes: '' },
    'MATH-172': { code: 'MATH 172', name: 'Calculus II', shortName: 'Calc II', credits: 4, type: 'science', semester: 'Year 1 Spring', prereqs: ['MATH-171'], coreqs: [], alternatives: ['MATH 182 - Honors Calculus II (Prereqs: MATH 171 with C or better)'], notes: '' },
    'ELEC-INQ-1': { code: 'Elective', name: 'Elective [INQUIRY]', shortName: '(INQUIRY)', credits: 3, type: 'ucore', semester: 'Year 1 Spring', prereqs: [], coreqs: [], alternatives: [], notes: '' },

    'CHE-201': { code: 'CHE 201', name: 'Chemical Process Principles and Calculations', shortName: 'Process Princ', credits: 3, type: 'engineering', semester: 'Year 2 Fall', prereqs: ['CHE-110', 'CHEM-106', 'MATH-172'], coreqs: [], alternatives: [], notes: '' },
    'CHEM-345': { code: 'CHEM 345', name: 'Organic Chemistry I', shortName: 'Org Chem I', credits: 4, type: 'science', semester: 'Year 2 Fall', prereqs: ['CHEM-106'], coreqs: [], alternatives: [], notes: '' },
    'PHYS-201': { code: 'PHYS 201', name: 'Physics for Scientists and Engineers I [PSCI]', shortName: 'Physics I (PSCI)', credits: 3, type: 'science', semester: 'Year 2 Fall', prereqs: ['MATH-171'], coreqs: ['PHYS-211'], alternatives: [], notes: '' },
    'PHYS-211': { code: 'PHYS 211', name: 'Physics Lab for Scientists and Engineers [PSCI]', shortName: 'Phys Lab I (PSCI)', credits: 1, type: 'science', semester: 'Year 2 Fall', prereqs: [], coreqs: ['PHYS-201'], alternatives: [], notes: '' },
    'MATH-273': { code: 'MATH 273', name: 'Calculus III', shortName: 'Calc III', credits: 2, type: 'science', semester: 'Year 2 Fall', prereqs: ['MATH-172'], coreqs: [], alternatives: ['MATH 283 - Honors Calculus III (Prereqs: MATH 172 with C or better; admitted to Honors College)'], notes: '' },
    'ELEC-INQ-2': { code: 'Elective', name: 'Elective [INQUIRY]', shortName: '(INQUIRY)', credits: 3, type: 'ucore', semester: 'Year 2 Fall', prereqs: [], coreqs: [], alternatives: [], notes: '' },

    'CHE-211': { code: 'CHE 211', name: 'Process Simulation', shortName: 'Proc Sim', credits: 3, type: 'engineering', semester: 'Year 2 Spring', prereqs: ['CHE-201'], coreqs: ['MATH-315'], alternatives: [], notes: '' },
    'CHEM-348': { code: 'CHEM 348', name: 'Organic Chemistry II and Problem Solving', shortName: 'Org Chem II', credits: 4, type: 'science', semester: 'Year 2 Spring', prereqs: ['CHEM-345'], coreqs: [], alternatives: ['MBIOS 303 - Introductory Biochemistry (Prereqs: BIOLOGY 107 with C or better; CHEM 102 or 345 with C or better)'], notes: '' },
    'PHYS-202': { code: 'PHYS 202', name: 'Physics for Scientists and Engineers II', shortName: 'Physics II', credits: 3, type: 'science', semester: 'Year 2 Spring', prereqs: ['PHYS-201'], coreqs: ['PHYS-212'], alternatives: [], notes: '' },
    'PHYS-212': { code: 'PHYS 212', name: 'Physics Lab for Scientists and Engineers II', shortName: 'Phys Lab II', credits: 1, type: 'science', semester: 'Year 2 Spring', prereqs: ['PHYS-211'], coreqs: ['PHYS-202'], alternatives: [], notes: '' },
    'MATH-220': { code: 'MATH 220', name: 'Introductory Linear Algebra', shortName: 'Linear Alg', credits: 2, type: 'science', semester: 'Year 2 Spring', prereqs: ['MATH-172'], coreqs: [], alternatives: [], notes: '' },
    'MATH-315': { code: 'MATH 315', name: 'Differential Equations', shortName: 'Diff Eq', credits: 3, type: 'science', semester: 'Year 2 Spring', prereqs: ['MATH-273'], coreqs: [], alternatives: [], notes: '' },

    'CHE-301': { code: 'CHE 301', name: 'Chemical Engineering Thermodynamics', shortName: 'Thermo I', credits: 3, type: 'engineering', semester: 'Year 3 Fall', prereqs: ['CHE-101', 'PHYS-202', 'PHYS-212'], coreqs: ['CHE-211', 'CHEM-345'], alternatives: [], notes: '' },
    'CHE-310': { code: 'CHE 310', name: 'Introduction to Transport Processes', shortName: 'Transport', credits: 3, type: 'engineering', semester: 'Year 3 Fall', prereqs: ['CHE-201'], coreqs: ['CHE-211', 'MATH-315'], alternatives: [], notes: '' },
    'CHE-498': { code: 'CHE 498', name: 'Seminar', shortName: 'Seminar', credits: 1, type: 'engineering', semester: 'Year 3 Fall', prereqs: [], coreqs: [], alternatives: [], notes: '' },
    'ENGL-402': { code: 'ENGL 402', name: 'Technical and Professional Writing [M] [WRTG]', shortName: 'Tech Writing [M]', credits: 3, type: 'ucore', semester: 'Year 3 Fall', prereqs: ['ENGL-101'], coreqs: [], alternatives: ['ENGL 403 - Technical and Professional Writing ESL (Prereqs: ENGLISH 101 or 105; junior standing; pass University Writing Portfolio)'], notes: '' },
    'ELEC-TECH-1': { code: 'Elective', name: 'Technical Elective', shortName: 'Technical', credits: 3, type: 'technical', semester: 'Year 3 Fall', prereqs: [], coreqs: [], alternatives: [], notes: '' },
    'ELEC-INQ-3': { code: 'Elective', name: 'Elective [INQUIRY]', shortName: '(INQUIRY)', credits: 3, type: 'ucore', semester: 'Year 3 Fall', prereqs: [], coreqs: [], alternatives: [], notes: '' },

    'CHE-302': { code: 'CHE 302', name: 'Chemical Engineering Thermodynamics II', shortName: 'Thermo II', credits: 3, type: 'engineering', semester: 'Year 3 Spring', prereqs: ['CHE-301'], coreqs: [], alternatives: [], notes: '' },
    'CHE-321': { code: 'CHE 321', name: 'Kinetics and Reactor Design', shortName: 'Kinetics', credits: 3, type: 'engineering', semester: 'Year 3 Spring', prereqs: ['CHE-211', 'CHE-310'], coreqs: ['CHE-302'], alternatives: [], notes: '' },
    'CHE-332': { code: 'CHE 332', name: 'Fluid Mechanics and Heat Transfer', shortName: 'Fluids/Heat', credits: 3, type: 'engineering', semester: 'Year 3 Spring', prereqs: ['CHE-211', 'CHE-310'], coreqs: ['CHE-302'], alternatives: [], notes: '' },
    'CHE-334': { code: 'CHE 334', name: 'Chemical Engineering Separations', shortName: 'Separations', credits: 3, type: 'engineering', semester: 'Year 3 Spring', prereqs: ['CHE-211', 'CHE-310', 'CHEM-345'], coreqs: ['CHE-302'], alternatives: [], notes: '' },

    'CHE-432': { code: 'CHE 432', name: 'Chemical Engineering Lab I [M]', shortName: 'Lab I [M]', credits: 3, type: 'engineering', semester: 'Year 4 Fall', prereqs: ['CHE-302', 'CHE-321', 'CHE-332', 'CHE-334'], coreqs: ['CHE-352', 'ENGL-402'], alternatives: [], notes: 'This course requires significant lab time. Plan your schedule accordingly and expect 6-8 hours of lab work per week in addition to lecture time.' },
    'CHE-441': { code: 'CHE 441', name: 'Process Control', shortName: 'Proc Control', credits: 3, type: 'engineering', semester: 'Year 4 Fall', prereqs: ['CHE-302', 'CHE-321', 'CHE-332', 'CHE-334'], coreqs: [], alternatives: [], notes: '' },
    'CHE-450': { code: 'CHE 450', name: 'Chemical Process Analysis and Design I', shortName: 'Design I', credits: 3, type: 'engineering', semester: 'Year 4 Fall', prereqs: ['CHE-302', 'CHE-321', 'CHE-332', 'CHE-334'], coreqs: ['CHE-352', 'ENGL-402'], alternatives: [], notes: '' },
    'CHE-352': { code: 'CHE 352', name: 'Chemical Process Safety', shortName: 'Proc Safety', credits: 3, type: 'engineering', semester: 'Year 4 Fall', prereqs: ['CHE-321', 'CHE-332'], coreqs: [], alternatives: [], notes: '' },
    'ECONS-101': { code: 'ECONS 101', name: 'Fundamentals of Microeconomics [SSCI]', shortName: 'Microecon (SSCI)', credits: 3, type: 'ucore', semester: 'Year 4 Fall', prereqs: [], coreqs: [], alternatives: ['ECONS 102 - Fundamentals of Macroeconomics (Prereqs: MATH 101, MATH 103 or higher, or concurrent enrollment; or minimum ALEKS score of 40%)', 'ECONS 198 - Economics Honors (Prereqs: Admitted to Honors College)'], notes: '' },

    'CHE-433': { code: 'CHE 433', name: 'Chemical Engineering Lab II [M]', shortName: 'Lab II [M]', credits: 2, type: 'engineering', semester: 'Year 4 Spring', prereqs: ['CHE-432'], coreqs: [], alternatives: [], notes: '' },
    'CHE-451': { code: 'CHE 451', name: 'Chemical Process Analysis and Design II [M]', shortName: 'Design II [M]', credits: 3, type: 'engineering', semester: 'Year 4 Spring', prereqs: ['CHE-450'], coreqs: [], alternatives: [], notes: '' },
    'ELEC-CHE-1': { code: 'Elective', name: 'Chemical Engineering Elective', shortName: 'CHE Elec', credits: 3, type: 'engineering', semester: 'Year 4 Spring', prereqs: [], coreqs: [], alternatives: [], notes: '' },
    'ELEC-CHE-2': { code: 'Elective', name: 'Chemical Engineering Elective', shortName: 'CHE Elec', credits: 3, type: 'engineering', semester: 'Year 4 Spring', prereqs: [], coreqs: [], alternatives: [], notes: '' },
    'ELEC-TECH-2': { code: 'Elective', name: 'Technical Elective', shortName: 'Technical', credits: 3, type: 'technical', semester: 'Year 4 Spring', prereqs: [], coreqs: [], alternatives: [], notes: '' }
};

export const semesterOrder = [
    'Year 1 Fall', 'Year 1 Spring',
    'Year 2 Fall', 'Year 2 Spring',
    'Year 3 Fall', 'Year 3 Spring',
    'Year 4 Fall', 'Year 4 Spring'
];
