document.addEventListener('DOMContentLoaded', () => {
    // 1. Definição dos textos (O Dicionário)
    const translations = {
        pt: {
            back: "Voltar",
            theme: "Tema",
            
            // Textos Gerais
            ourProjects: "Projetos 2IMEC",
            working: "Funcionamento",
            commercial: "Comercial", // Use data-i18n="commercial" no HTML para este botão
            visitSite: "Visitar site",

            // --- PROJETOS (Títulos e Descrições) ---
            
            // Technoarm (Grupo 3)
            mec_p3_title: "Solução prática para melhor o desenvolvimento de trabalhos e estudos",
            mec_p3_desc: "Miniatura de braço robótico articulado inteiro usinado e funcional. Controlado via wifi.",
            
            // ARPE BRASIL (Grupo 4)
            mec_p4_title: "Solução prática para melhor o desenvolvimento de trabalhos e estudos",
            mec_p4_desc: "A.R.P.E: automação industrial sob medida, unindo robótica, programação e elétrica para otimizar sua produção.",
            
            // RetroTech (Grupo 5)
            mec_p5_title: "A RetroTech automatiza máquinas de dobra, oferecendo soluções que aumentam produtividade, precisão e eficiência industrial.",
            mec_p5_desc: "Rede de sensores térmicos para monitoramento contínuo de temperatura em processos industriais.",
            
            // CEVITech (Grupo 6)
            mec_p6_title: "Câmbio CVT demonstrativo",
            mec_p6_desc: "Câmbio CVT demonstrativo que facilita o ensino e a visualização do funcionamento de transmissões automotivas.",
            
            // Mini Router (Grupo 7)
            mec_p7_title: "Restauração e aprimoramento da mini router",
            mec_p7_desc: "Projeto de restauração da mini router, com peças novas, redução de vibração e atualização de software para melhor desempenho.",
            
            // Mechatec (Grupo 8 - mas slide active)
            mec_p8_title: "Seletora de Brocas",
            mec_p8_desc: "Seletora de brocas automatizada que organiza o ambiente de trabalho e controla dados.",
            
            // CyberTrace (Grupo 9)
            mec_p9_title: "Desenho com IA",
            mec_p9_desc: "Mesa cartesiana de baixo custo controlada por IA para desenhos técnicos e escritas com precisão.",
            
            // TechnoArm - Simulator (Grupo 10)
            mec_p10_title: "Braço Robótico",
            mec_p10_desc: "Braço robótico em menor escala para soluções práticas e aulas dinâmicas.",
            
            // SelectPro (Grupo 11)
            mec_p11_title: "WinderTech",
            mec_p11_desc: "Tecnologia de ponta para molas pequenas com tensão ideal, precisão no enrolamento e durabilidade superior.",
            
            // InnovaTech (Grupo 12)
            mec_p12_title: "Organização e controle de qualidade",
            mec_p12_desc: "Mesa giratória para organização e controle de qualidade das peças posicionando-as em caixas específicas automaticamente.",

            // IN5 (Novo Projeto - Grupo 13)
            mec_p13_title: "Inovação digital para medições acessíveis e eficazes",
            mec_p13_desc: "Paquímetro digital assistivo que amplia leitura e facilita a medição para pessoas com baixa visão.",

            // Footer
            footerAboutTitle: "SENAI São Carlos",
            footerAboutText: "Centro de referência em formação técnica e tecnológica, preparando profissionais para os desafios da Indústria 4.0.",
            footerAboutSlogan: "Formando o futuro da tecnologia",
            
            footerClassesTitle: "Turmas 2024/2025",
            class3TDSTitle: "3º Técnico em Desenvolvimento de Sistemas",
            footerClass2IMECB: "2º Integrado em Mecatrônica Turma B",
            footerClass2IMECC: "2º Integrado em Mecatrônica Turma C",
            class2IDSTitle: "2º Integrado em Desenvolvimento de Sistemas",
            
            footerDeveloperTitle: "Equipe de Desenvolvimento",
            techLead: "Tech Lead",
            developers: "Desenvolvedores:",
            footerIndustry: "Serviço Nacional de Aprendizagem Industrial",
            footerRights: "© 2025 Todos os direitos reservados",
            footerDevelopedBy: "Desenvolvido por"
        },
        en: {
            back: "Back",
            theme: "Theme",
            
            // General Texts
            ourProjects: "2IMEC Projects",
            working: "How it works",
            commercial: "Commercial",
            visitSite: "Visit site",

            // --- PROJECTS ---
            
            // Technoarm
            mec_p3_title: "Practical solution to improve work and study development",
            mec_p3_desc: "Miniature fully machined and functional articulated robotic arm. Controlled via Wi-Fi.",
            
            // ARPE BRASIL
            mec_p4_title: "Practical solution to improve work and study development",
            mec_p4_desc: "A.R.P.E: Custom industrial automation, combining robotics, programming, and electrical engineering to optimize your production.",
            
            // RetroTech
            mec_p5_title: "RetroTech automates bending machines, offering solutions that increase productivity, precision, and industrial efficiency.",
            mec_p5_desc: "Thermal sensor network for continuous temperature monitoring in industrial processes.",
            
            // CEVITech
            mec_p6_title: "Demonstrative CVT Transmission",
            mec_p6_desc: "Demonstrative CVT transmission that facilitates teaching and visualization of automotive transmission operation.",
            
            // Mini Router
            mec_p7_title: "Restoration and improvement of the mini router",
            mec_p7_desc: "Mini router restoration project with new parts, vibration reduction, and software updates for better performance.",
            
            // Mechatec
            mec_p8_title: "Drill Bit Selector",
            mec_p8_desc: "Automated drill bit selector that organizes the workspace and controls data.",
            
            // CyberTrace
            mec_p9_title: "Drawing with AI",
            mec_p9_desc: "Low-cost Cartesian table controlled by AI for precise technical drawings and writing.",
            
            // TechnoArm
            mec_p10_title: "Robotic Arm",
            mec_p10_desc: "Smaller-scale robotic arm for practical solutions and dynamic classes.",
            
            // SelectPro
            mec_p11_title: "WinderTech",
            mec_p11_desc: "Cutting-edge technology for small springs with ideal tension, winding precision, and superior durability.",
            
            // InnovaTech
            mec_p12_title: "Organization and quality control",
            mec_p12_desc: "Rotary table for organization and quality control of parts, automatically positioning them in specific boxes.",

            // IN5
            mec_p13_title: "Digital innovation for accessible and effective measurements",
            mec_p13_desc: "Assistive digital caliper that magnifies readings and facilitates measurement for people with low vision.",

            // Footer
            footerAboutTitle: "SENAI São Carlos",
            footerAboutText: "Reference center in technical and technological training, preparing professionals for Industry 4.0 challenges.",
            footerAboutSlogan: "Shaping the future of technology",
            
            footerClassesTitle: "Classes 2024/2025",
            class3TDSTitle: "3rd Systems Development Technician",
            footerClass2IMECB: "2nd Mechatronics Integrated Class B",
            footerClass2IMECC: "2nd Mechatronics Integrated Class C",
            class2IDSTitle: "2nd Systems Development Integrated",
            
            footerDeveloperTitle: "Development Team",
            techLead: "Tech Lead",
            developers: "Developers:",
            footerIndustry: "National Service for Industrial Training",
            footerRights: "© 2025 All rights reserved",
            footerDevelopedBy: "Developed by"
        }
    };

    // 2. Lógica de Troca de Idioma
    const languageToggleBtn = document.getElementById('language-toggle');
    const currentLangSpan = document.getElementById('current-lang');
    
    // Verifica se já existe uma preferência salva, senão usa PT
    let currentLang = localStorage.getItem('siteLang') || 'pt';

    // Função para aplicar a tradução
    function updateLanguage(lang) {
        // Atualiza todos os elementos que possuem o atributo data-i18n
        const elements = document.querySelectorAll('[data-i18n]');
        
        elements.forEach(element => {
            const key = element.getAttribute('data-i18n');
            // Verifica se a chave existe no dicionário
            if (translations[lang] && translations[lang][key]) {
                // Se for um input placeholder, usa placeholder, senão usa textContent
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = translations[lang][key];
                } else {
                    element.textContent = translations[lang][key];
                }
            }
        });

        // Atualiza o texto do botão de idioma
        currentLangSpan.textContent = lang === 'pt' ? 'PT' : 'EN';
        
        // Salva a preferência
        localStorage.setItem('siteLang', lang);
        currentLang = lang;
    }

    // Inicializa com o idioma salvo
    updateLanguage(currentLang);

    // Evento de clique no botão
    languageToggleBtn.addEventListener('click', () => {
        const newLang = currentLang === 'pt' ? 'en' : 'pt';
        updateLanguage(newLang);
    });
});