const translations = {
    pt: {
        back: "Voltar",
        theme: "Tema",
        ourProjects: "Nossos Projetos", // Ou "Projetos 2IDS", como preferir
        working: "Funcionamento",
        commercial: "Comercial",
        visitSite: "Visitar site",
        
        // Abas dos Grupos (Tabs)
        group1: "GC&D",
        group2: "SenAI",
        group3: "SPARK",
        group4: "Tool Search",
        group5: "OilMap",
        group6: "Grupo 6",
        group7: "Grupo 7",

        // Footer
        footerCity: "SENAI São Carlos",
        footerAboutTitle: "SENAI São Carlos",
        footerAboutText: "Centro de referência em formação técnica e tecnológica, preparando profissionais para os desafios da Indústria 4.0.",
        footerAboutSlogan: "Formando o futuro da tecnologia",
        footerClassesTitle: "Turmas 2024/2025",
        class3TDSTitle: "3º Técnico em Desenvolvimento de Sistemas",
        footerClass2IMECB: "2º Integrado em Mecatrônica Turma B",
        footerClass2IMECC: "2º Integrado em Mecatrônica Turma C",
        class2IDSTitle: "2º Integrado em Desenvolvimento de Sistemas",
        footerDeveloperTitle: "Equipe de Desenvolvimento",
        footerDevelopedBy: "Desenvolvido por",
        techLead: "Tech Lead",
        developers: "Desenvolvedores:",
        footerIndustry: "Serviço Nacional de Aprendizagem Industrial",
        footerRights: "© 2025 SENAI São-Carlos - Todos os direitos reservados",

        // Títulos e Descrições dos Projetos (2IDS)
        
        // Projeto 1 - GC&D
        ids_p1_title: "Sistema de gestão de ferramentas e defeitos para laboratórios educacionais",
        ids_p1_desc: "O GCD é um app em React Native para gerenciar ferramentas, salas e defeitos em laboratórios SENAI.",
        
        // Projeto 2 - SenAI
        ids_p2_title: "Chatbot inteligente desenvolvido para o SENAI São Carlos.",
        ids_p2_desc: "Assistente virtual do SENAI São Carlos, com integração LM Studio e interface web intuitiva para informações institucionais.",
        
        // Projeto 3 - SPARK
        ids_p3_title: "Monitoramento Energético em Tempo Real",
        ids_p3_desc: "Sistema embarcado com ESP32, sensores SCT-013-00 e ACS712 para monitoramento e eficiência energética industrial.",
        
        // Projeto 4 - Tool Search
        ids_p4_title: "Organize, controle e encontre ferramentas com precisão",
        ids_p4_desc: "Sistema inteligente para organizar, controlar e localizar ferramentas em tempo real.",
        
        // Projeto 5 - OilMap
        ids_p5_title: "Análise e unificação de dados geoespaciais",
        ids_p5_desc: "Plataforma web unifica dados geoespaciais para agilizar decisões e otimizar exploração na Petrobras.",
        
        // Projeto 6 - Impressora 3D
        ids_p6_title: "Impressora 3D de Baixo Custo",
        ids_p6_desc: "Desenvolvimento de uma impressora 3D acessível e eficiente, democratizando o acesso à tecnologia de fabricação digital.",
        
        // Projeto 7 - FaceShield
        ids_p7_title: "Sistema de Segurança Inteligente",
        ids_p7_desc: "Solução completa de segurança utilizando reconhecimento facial, alertas em tempo real e integração com dispositivos móveis para proteção residencial."
    },
    en: {
        back: "Back",
        theme: "Theme",
        ourProjects: "2IDS Projects", // Ou "Our Projects"
        working: "How it works",
        commercial: "Commercial",
        visitSite: "Visit site",

        // Group Tabs (EN) - Usually kept as names, but can be translated if generic
        group1: "GC&D",
        group2: "SenAI",
        group3: "SPARK",
        group4: "Tool Search",
        group5: "OilMap",
        group6: "Group 6",
        group7: "Group 7",
        
        // Footer (EN)
        footerCity: "SENAI São Carlos",
        footerAboutTitle: "SENAI São Carlos",
        footerAboutText: "Reference center in technical and technological education, preparing professionals for Industry 4.0 challenges.",
        footerAboutSlogan: "Shaping the future of technology",
        footerClassesTitle: "Classes 2024/2025",
        class3TDSTitle: "3rd Systems Development Technician",
        footerClass2IMECB: "2nd Integrated Mechatronics Class B",
        footerClass2IMECC: "2nd Integrated Mechatronics Class C",
        class2IDSTitle: "2nd Integrated Systems Development",
        footerDeveloperTitle: "Development Team",
        footerDevelopedBy: "Developed by",
        techLead: "Tech Lead",
        developers: "Developers:",
        footerIndustry: "National Service for Industrial Training",
        footerRights: "© 2025 SENAI São-Carlos - All rights reserved",

        // Títulos e Descrições dos Projetos (EN)
        
        // Project 1 - GC&D
        ids_p1_title: "Tool and defect management system for educational laboratories",
        ids_p1_desc: "GCD is a React Native app to manage tools, rooms, and defects in SENAI laboratories.",
        
        // Project 2 - SenAI
        ids_p2_title: "Intelligent chatbot developed for SENAI São Carlos.",
        ids_p2_desc: "Virtual assistant for SENAI São Carlos, with LM Studio integration and intuitive web interface for institutional information.",
        
        // Project 3 - SPARK
        ids_p3_title: "Real-Time Energy Monitoring",
        ids_p3_desc: "Embedded system with ESP32, SCT-013-00 and ACS712 sensors for industrial energy monitoring and efficiency.",
        
        // Project 4 - Tool Search
        ids_p4_title: "Organize, control, and find tools with precision",
        ids_p4_desc: "Intelligent system to organize, control, and locate tools in real-time.",
        
        // Project 5 - OilMap
        ids_p5_title: "Analysis and unification of geospatial data",
        ids_p5_desc: "Web platform unifies geospatial data to speed up decisions and optimize exploration at Petrobras.",
        
        // Project 6 - Low Cost 3D Printer
        ids_p6_title: "Low-Cost 3D Printer",
        ids_p6_desc: "Development of an accessible and efficient 3D printer, democratizing access to digital manufacturing technology.",
        
        // Project 7 - FaceShield
        ids_p7_title: "Smart Security System",
        ids_p7_desc: "Complete security solution using facial recognition, real-time alerts, and integration with mobile devices for residential protection."
    }
};

function updateLanguage(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            // Verifica se é um elemento complexo (como o botão voltar que tem SVG)
            // Se tiver filhos que não são apenas texto, tenta achar um span
            if (element.children.length > 0 && element.tagName !== 'P' && element.tagName !== 'H2' && element.tagName !== 'H3') {
                 const span = element.querySelector('span');
                 if(span) span.textContent = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });
    const langBtn = document.getElementById('current-lang');
    if(langBtn) langBtn.textContent = lang.toUpperCase();
}

document.addEventListener('DOMContentLoaded', () => {
    const langToggle = document.getElementById('language-toggle');
    let currentLang = 'pt';
    if (langToggle) {
        langToggle.addEventListener('click', () => {
            currentLang = currentLang === 'pt' ? 'en' : 'pt';
            updateLanguage(currentLang);
        });
    }
});