from app.models import db ,Assignment , environment, SCHEMA
from datetime import datetime

def seed_assignments():
    assignment1 = Assignment(
            title="Calculus in Real-World Applications",
            class_id=1,
            instructions="In this assignment, you will explore the practical applications of calculus in various fields and analyze how it helps us understand and solve real-world problems. You will choose a specific application area, such as physics, economics, or biology, and investigate how concepts like limits, derivatives, and integrals play a crucial role in modeling and analyzing phenomena. Additionally, you will be required to present examples, solve related problems, and discuss the significance of calculus in your chosen application area. This assignment aims to enhance your understanding of calculus and its relevance beyond theoretical mathematics, highlighting its practical utility in diverse domains.",
            points = 100,
            due_date = datetime(2023, 6, 2),
            topic = "Calculus",
            )
    assignment2 = Assignment(
            title="Optimization Challenges: Maxima and Minima",
            class_id=1,
            instructions="In this assignment, you will delve into the fascinating world of optimization problems in calculus. You will encounter various scenarios where you need to find the maximum or minimum values of functions, taking into account constraints and boundaries. Through a series of exercises and problems, you will apply critical concepts like critical points, first and second derivative tests, and optimization techniques. By solving real-life optimization challenges, you will develop a deeper understanding of how calculus helps us make informed decisions and optimize outcomes in fields such as engineering, finance, and logistics.",
            points = 100,
            due_date = datetime(2023, 6, 5),
            topic = "Calculus",
            )
    assignment3 = Assignment(
            title="Differential Equations in Dynamic Systems",
            class_id=1,
            instructions="This assignment focuses on the application of differential equations in modeling dynamic systems. You will explore how calculus plays a fundamental role in describing the rate of change and interdependencies within these systems. Through hands-on exercises, you will solve ordinary differential equations (ODEs) and investigate their solutions in contexts such as population dynamics, electrical circuits, or mechanical systems. By mastering the principles of differential equations, you will gain insights into predicting and understanding the behavior of complex dynamic phenomena encountered in various scientific and engineering disciplines.",
            points = 100,
            due_date = datetime(2023, 6, 6),
            topic = "Calculus",
            )
    assignment4 = Assignment(
            title="The Fundamental Theorem of Calculus and Area Approximation",
            class_id=1,
            instructions="In this assignment, you will explore the relationship between integrals, antiderivatives, and the fundamental theorem of calculus. You will investigate the fundamental theorem of calculus in both its forms and understand how it connects the concepts of differentiation and integration. Through practical examples and numerical methods, you will approximate areas under curves, demonstrate the use of Riemann sums, and apply integration techniques like the definite and indefinite integrals. By gaining a comprehensive understanding of the fundamental theorem of calculus, you will uncover its significance in areas such as physics, economics, and geometry, where calculating areas and accumulated quantities are crucial.",
            points = 100,
            due_date = datetime(2023, 6, 9),
            topic = "Calculus",
            )
    assignment5 = Assignment(
            title="Exploring Artistic Expression: Drawing Techniques and Styles",
            class_id=2,
            instructions="In this assignment, you will embark on a journey to explore various drawing techniques and styles, immersing yourself in the world of artistic expression. You will learn about fundamental drawing principles such as line, shape, form, perspective, shading, and composition. Through a series of exercises and projects, you will experiment with different mediums like pencil, charcoal, ink, and pastels, allowing you to develop your skills and discover your artistic preferences. Additionally, you will explore different art movements and styles, such as realism, impressionism, abstract, and surrealism, analyzing the techniques and characteristics associated with each. This assignment aims to nurture your creativity, expand your artistic repertoire, and encourage self-expression through the captivating medium of drawing.",
            points = 100,
            due_date = datetime(2023, 6, 2),
            topic = "Art",
            )
    assignment6 = Assignment(
            title="Mastering Anatomy in Figure Drawing",
            class_id=2,
            instructions="In this assignment, you will delve into the captivating world of figure drawing and master the art of capturing the human form. You will explore anatomy, studying the proportions, skeletal structure, and muscular anatomy of the human body. Through a combination of observation, sketching from life or references, and studying anatomical references, you will refine your ability to accurately depict the human figure. You will also explore various techniques for conveying movement, gesture, and emotion in your drawings. This assignment aims to deepen your understanding of human anatomy, enhance your figure drawing skills, and enable you to bring life and realism to your artwork.",
            points = 100,
            due_date = datetime(2023, 6, 4),
            topic = "Art",
            )
    assignment7 = Assignment(
            title="Exploring Mixed Media: Collage and Drawing",
            class_id=2,
            instructions="In this assignment, you will embark on a creative exploration of mixed media, combining the techniques of collage and drawing to create unique and visually compelling artworks. You will learn about the principles of collage, including composition, layering, and juxtaposition, and how to incorporate drawing elements seamlessly. Through experimentation with different materials such as paper, fabric, found objects, and various drawing tools, you will create multi-dimensional and textured artworks that blend different artistic mediums. This assignment aims to push the boundaries of traditional drawing, encouraging you to think outside the box, and embrace the endless possibilities of mixed media art.",
            points = 100,
            due_date = datetime(2023, 6, 9),
            topic = "Art",
            )
    assignment8 = Assignment(
            title="Unveiling the Secrets of Life: Exploring Cellular Biology",
            class_id=3,
            instructions="In this assignment, you will embark on a fascinating journey into the realm of cellular biology, uncovering the intricate mechanisms that underlie life itself. You will delve into the fundamental concepts of cell structure and function, exploring topics such as cell organelles, cellular membranes, and cellular transport. Through a series of hands-on activities and research-based projects, you will investigate the diverse functions of cells, including energy production, protein synthesis, and cell signaling. Additionally, you will explore the interplay between cells in tissues, organs, and organ systems, understanding how they contribute to the overall functioning of living organisms. This assignment aims to deepen your understanding of the building blocks of life and the fundamental processes that drive biological systems.",
            points = 100,
            due_date = datetime(2023, 6, 2),
            topic = "Biology",
            )
    assignment9 = Assignment(
            title="Biodiversity Hotspots: Investigating Ecosystems and Conservation",
            class_id=3,
            instructions="In this assignment, you will dive into the captivating world of biodiversity and explore the intricate relationships that exist within ecosystems. You will study various ecosystems, including forests, coral reefs, grasslands, and wetlands, analyzing their biodiversity, ecological interactions, and the critical role they play in maintaining a sustainable environment. Through research, data analysis, and case studies, you will investigate the impact of human activities on biodiversity and the importance of conservation efforts. Additionally, you will explore strategies and initiatives aimed at preserving endangered species and protecting biodiversity hotspots. This assignment aims to raise awareness about the value of biodiversity, the threats it faces, and the urgent need for conservation actions to ensure a harmonious coexistence between humans and the natural world.",
            points = 100,
            due_date = datetime(2023, 6, 4),
            topic = "Biology",
            )
    assignment10 = Assignment(
            title="Genetics and Inheritance: Unraveling the Code of Life",
            class_id=3,
            instructions=" In this assignment, you will embark on a captivating exploration of genetics, unraveling the secrets hidden within the code of life. You will delve into the principles of heredity, studying Mendelian genetics, gene expression, and the mechanisms of inheritance. Through research, data analysis, and problem-solving exercises, you will investigate how genes determine traits, explore patterns of inheritance, and understand the role of DNA and RNA in genetic processes. Additionally, you will explore cutting-edge discoveries in the field of genetics, such as gene editing and genetic engineering, and their implications for medicine, agriculture, and biotechnology. This assignment aims to deepen your understanding of the intricate genetic mechanisms that shape life, fostering an appreciation for the impact of genetics on both individual organisms and the broader scope of biological systems.",
            points = 100,
            due_date = datetime(2023, 6, 9),
            topic = "Biology",
            )
    assignment11 = Assignment(
            title="Algorithmic Problem Solving: Unleashing the Power of Computer Science",
            class_id=4,
            instructions="In this assignment, you will embark on a thrilling journey into the realm of algorithmic problem solving, uncovering the power of computer science in tackling complex challenges. You will explore various problem-solving techniques and algorithms, such as searching, sorting, graph traversal, and dynamic programming. Through hands-on coding exercises and projects, you will apply these techniques to solve real-world problems, analyzing their efficiency, correctness, and scalability. Additionally, you will investigate algorithmic strategies for optimization and explore how algorithm design impacts the performance of software systems. This assignment aims to sharpen your problem-solving skills, deepen your understanding of algorithmic thinking, and unleash the transformative potential of computer science in addressing a wide range of computational problems.",
            points = 100,
            due_date = datetime(2023, 6, 2),
            topic = "Computer Science",
            )
    assignment12 = Assignment(
            title="Data Structures and Algorithms: Building the Foundations of Software Engineering",
            class_id=4,
            instructions="In this assignment, you will delve into the essential concepts of data structures and algorithms, laying the foundations for software engineering excellence. You will explore fundamental data structures, such as arrays, linked lists, stacks, queues, trees, and graphs, understanding their properties, operations, and trade-offs. Through practical coding exercises and analysis, you will implement and manipulate these data structures, optimizing their performance for different use cases. Additionally, you will study classic algorithms, including sorting, searching, and graph algorithms, evaluating their time and space complexities. This assignment aims to equip you with the skills necessary to design efficient and scalable software solutions, fostering your understanding of data organization and algorithmic efficiency in the realm of computer science.",
            points = 100,
            due_date = datetime(2023, 6, 4),
            topic = "Computer Science",
            )
    assignment13 = Assignment(
            title="Cybersecurity and Ethical Hacking: Safeguarding Digital Worlds",
            class_id=4,
            instructions="In this assignment, you will dive into the captivating world of cybersecurity, exploring the challenges and strategies associated with safeguarding digital systems. You will study various aspects of cybersecurity, including network security, encryption, authentication, access control, and vulnerability analysis. Through hands-on exercises and simulations, you will learn ethical hacking techniques to identify and exploit security vulnerabilities, gaining a deeper understanding of how hackers exploit weaknesses in computer systems. Additionally, you will explore strategies for mitigating cyber threats, such as intrusion detection, incident response, and security best practices. This assignment aims to enhance your awareness of the importance of cybersecurity, providing you with practical knowledge and skills to protect digital assets and preserve the integrity and privacy of computer systems.",
            points = 100,
            due_date = datetime(2023, 6, 9),
            topic = "Computer Science",
            )
    assignment14 = Assignment(
            title="¡Vamos a Hablar Español! Exploring Language and Culture",
            class_id=5,
            instructions="In this assignment, you will immerse yourself in the vibrant world of Spanish language and culture, embarking on a journey of linguistic discovery. You will explore various aspects of the Spanish language, including grammar, vocabulary, pronunciation, and conversational skills. Through interactive exercises, role-plays, and language practice, you will develop your ability to communicate effectively in Spanish, building a strong foundation for language fluency. Additionally, you will delve into the rich and diverse cultures of Spanish-speaking countries, examining traditions, literature, music, and cuisine. This assignment aims to foster a deep appreciation for the Spanish language and its cultural contexts, enabling you to communicate confidently and engage meaningfully with the Spanish-speaking world.",
            points = 100,
            due_date = datetime(2023, 6, 2),
            topic = "Computer Science",
            )
    assignment15 = Assignment(
            title="La Ruta Literaria: Exploring Spanish Literature",
            class_id=5,
            instructions="In this assignment, you will embark on a literary journey through the captivating realm of Spanish literature, exploring influential works and authors from different periods and regions. You will study renowned literary genres such as poetry, short stories, novels, and plays, examining their themes, styles, and historical context. Through close reading, analysis, and interpretation, you will gain a deeper understanding of the unique voices and perspectives represented in Spanish literature. Additionally, you will engage in creative writing exercises, enabling you to express your own ideas and narratives in Spanish. This assignment aims to enhance your literary appreciation, expand your vocabulary, and sharpen your reading and writing skills in the context of Spanish literature.",
            points = 100,
            due_date = datetime(2023, 6, 4),
            topic = "Spanish",
            )
    assignment16 = Assignment(
            title="¡Viva el Cine Español! Exploring Spanish Cinema",
            class_id=5,
            instructions="In this assignment, you will delve into the captivating world of Spanish cinema, exploring the richness and diversity of the Spanish film industry. You will study influential Spanish filmmakers, iconic films, and significant cinematic movements that have shaped Spanish cinema's identity. Through film analysis, discussions, and critiques, you will examine themes, techniques, and cultural representations in Spanish films. Additionally, you will have the opportunity to create your own short film or storyboard, showcasing your understanding of cinematic elements and storytelling in Spanish. This assignment aims to deepen your appreciation for Spanish cinema, expand your cultural knowledge, and enhance your ability to analyze and discuss films in the Spanish language",
            points = 100,
            due_date = datetime(2023, 6, 4),
            topic = "Spanish",
            )

    assignment17 = Assignment(
            title="Probability and Statistics in Data Analysis",
            class_id=1,
            instructions="In this assignment, you will explore the vital role of probability and statistics in data analysis. You will delve into concepts such as probability distributions, statistical measures, hypothesis testing, and regression analysis. Through hands-on exercises and real-world data sets, you will apply these concepts to analyze and interpret data, drawing meaningful insights and making informed decisions. Additionally, you will explore statistical software tools and techniques for data visualization, enhancing your ability to communicate data-driven findings effectively. This assignment aims to deepen your understanding of probability and statistics, equipping you with essential skills for data analysis and decision-making in various fields, such as business, social sciences, and healthcare.",
            points = 100,
            due_date = datetime(2023, 6, 10),
            topic = "Calculus",
            )
    assignment18 = Assignment(
            title="Analyzing Rates of Change: Exploring the Fundamentals of Calculus",
            class_id=1,
            instructions="In this assignment, you will delve into the fundamental concepts of calculus and their applications in analyzing rates of change. You will explore the concepts of limits, derivatives, and integrals, understanding their role in understanding and quantifying change in various contexts. Through a series of problem-solving exercises and real-world examples, you will apply calculus techniques to analyze motion, growth, and optimization problems. Additionally, you will explore the connection between derivatives and rates of change, as well as the fundamental theorem of calculus. This assignment aims to strengthen your understanding of calculus principles, develop your problem-solving skills, and highlight the importance of calculus in describing and predicting change in the world around us.",
            points = 100,
            due_date = datetime(2023, 6, 14),
            topic = "Calculus",
            )
    assignment19 = Assignment(
            title="Applications of Calculus in Science and Engineering",
            class_id=1,
            instructions="In this assignment, you will explore the practical applications of calculus in the fields of science and engineering. You will investigate how calculus concepts, such as derivatives and integrals, are used to model and analyze phenomena in physics, chemistry, biology, and engineering disciplines. Through case studies and problem-solving exercises, you will apply calculus techniques to solve real-world problems, such as finding rates of reaction, determining optimal solutions, and analyzing physical systems. Additionally, you will examine the limitations and assumptions of mathematical models in these applications, fostering a critical understanding of the role of calculus in scientific and engineering practices. This assignment aims to deepen your appreciation for the role of calculus in scientific exploration, enhancing your problem-solving abilities and demonstrating the relevance of calculus in diverse disciplines.",
            points = 100,
            due_date = datetime(2023, 6, 19),
            topic = "Calculus",
            )
    assignment20 = Assignment(
            title="Exploring the Elements of Art: A Journey of Visual Expression",
            class_id=2,
            instructions="In this assignment, you will embark on an exploration of the fundamental elements of art, unraveling the tools and techniques that artists use to create captivating visual compositions. You will delve into concepts such as line, shape, form, color, texture, and value, understanding how each element contributes to the overall artistic expression. Through a series of hands-on exercises and creative projects, you will experiment with various materials and artistic mediums, honing your skills in utilizing the elements of art to convey emotions, narratives, and aesthetic qualities. This assignment aims to nurture your artistic sensibilities, expand your visual vocabulary, and empower you to communicate through the powerful language of art.",
            points = 100,
            due_date = datetime(2023, 6, 11),
            topic = "Art",
            )
    assignment21 = Assignment(
            title="Mastering Perspective: Capturing Depth and Dimension in Art",
            class_id=2,
            instructions="In this assignment, you will delve into the fascinating world of perspective, unlocking the secrets to creating realistic and immersive drawings. You will explore the principles of linear perspective, understanding how to accurately depict depth, distance, and spatial relationships in your artwork. Through guided exercises and projects, you will practice drawing scenes with one-point, two-point, and three-point perspective, mastering techniques for creating convincing illusions of space. Additionally, you will study the works of renowned artists who have mastered perspective, gaining inspiration and insights into their approaches. This assignment aims to enhance your understanding of spatial representation, strengthen your observational skills, and equip you with the tools to bring depth and dimension to your drawings.",
            points = 100,
            due_date = datetime(2023, 6, 15),
            topic = "Art",
            )
    assignment22 = Assignment(
            title="Exploring Mixed Media: Collage and Drawing Fusion",
            class_id=2,
            instructions="In this assignment, you will embark on a creative journey into the realm of mixed media art, blending the techniques of collage and drawing to create dynamic and visually captivating artworks. You will explore the possibilities of combining different materials such as paper, fabric, found objects, and drawing tools to construct multi-layered and textured compositions. Through experimentation and exploration, you will learn how to seamlessly integrate collage elements with drawing techniques, creating unique and expressive artworks. Additionally, you will study the works of mixed media artists for inspiration and guidance, understanding the innovative approaches they employ in their creations. This assignment aims to encourage your creativity, push the boundaries of traditional art forms, and allow you to express your ideas and narratives through the fusion of collage and drawing techniques.",
            points = 100,
            due_date = datetime(2023, 6, 21),
            topic = "Art",
            )
    assignment23 = Assignment(
            title="Ecological Exploration: Investigating Ecosystem Dynamics",
            class_id=3,
            instructions="In this assignment, you will embark on an ecological exploration, diving into the intricate dynamics of ecosystems and the interconnectedness of living organisms. You will study concepts such as food chains, energy flow, nutrient cycles, and population dynamics. Through field observations, data analysis, and ecological modeling, you will investigate the relationships between different species, their adaptations, and the factors influencing their distribution and abundance. Additionally, you will explore the impact of human activities on ecosystems and discuss strategies for conservation and sustainability. This assignment aims to deepen your understanding of the delicate balance of ecosystems, cultivate your ecological awareness, and equip you with the knowledge to contribute to the preservation of biodiversity.",
            points = 100,
            due_date = datetime(2023, 6, 11),
            topic = "Biology",
            )
    assignment24 = Assignment(
            title="Genetics and Inheritance: Unlocking the Code of Life",
            class_id=3,
            instructions="In this assignment, you will explore the fascinating world of genetics, unraveling the secrets encoded within the DNA of living organisms. You will study the principles of inheritance, genetic variation, and molecular genetics. Through laboratory experiments, data analysis, and genetic simulations, you will investigate patterns of inheritance, gene expression, and the role of DNA in genetic processes. Additionally, you will explore emerging topics in genetics, such as genetic engineering and gene therapy, and discuss the ethical implications of these technologies. This assignment aims to deepen your understanding of genetics, foster critical thinking about the genetic basis of life, and highlight the impact of genetics on human health and the natural world.",
            points = 100,
            due_date = datetime(2023, 6, 15),
            topic = "Biology",
            )
    assignment25 = Assignment(
            title="Cellular Processes: Unveiling the Mechanisms of Life",
            class_id=3,
            instructions="In this assignment, you will delve into the intricate world of cellular processes, uncovering the mechanisms that drive the functioning of living organisms. You will study topics such as cell structure, cell division, metabolism, and cellular communication. Through laboratory investigations, microscopy observations, and data analysis, you will explore the diverse functions of cells and their organelles, understanding how they contribute to the overall functioning of tissues, organs, and organ systems. Additionally, you will examine the impact of cellular processes on human health, exploring diseases associated with cellular dysfunction and discussing potential therapeutic interventions. This assignment aims to deepen your understanding of the fundamental processes that sustain life, cultivate your scientific inquiry skills, and highlight the relevance of cellular biology in medicine and biotechnology.",
            points = 100,
            due_date = datetime(2023, 6, 23),
            topic = "Biology",
            )
    assignment26 = Assignment(
            title="Algorithmic Efficiency: Analyzing Time and Space Complexity",
            class_id=4,
            instructions="In this assignment, you will delve into the world of algorithmic efficiency, analyzing the time and space complexity of algorithms. You will study techniques for measuring and analyzing the efficiency of algorithms, such as Big O notation. Through theoretical analysis and practical coding exercises, you will evaluate the performance of algorithms and data structures, identifying the most efficient solutions for specific problem scenarios. Additionally, you will explore strategies for optimizing algorithms and discuss trade-offs between time complexity and space complexity. This assignment aims to deepen your understanding of algorithm design, enhance your problem-solving skills, and equip you with the knowledge to develop efficient and scalable software solutions.",
            points = 100,
            due_date = datetime(2023, 6, 11),
            topic = "Computer Science",
            )
    assignment27 = Assignment(
            title="Web Development: Creating Dynamic and Interactive Websites",
            class_id=4,
            instructions="In this assignment, you will immerse yourself in the world of web development, learning how to create dynamic and interactive websites. You will explore front-end web technologies such as HTML, CSS, and JavaScript, understanding how they work together to build user-friendly and visually appealing web interfaces. Through hands-on coding projects, you will practice designing and implementing interactive features, such as forms, navigation menus, and content sliders. Additionally, you will explore back-end web development concepts, including server-side programming and database integration, to create full-stack web applications. This assignment aims to equip you with the skills and knowledge necessary to design and develop modern, responsive, and interactive websites.",
            points = 100,
            due_date = datetime(2023, 6, 18),
            topic = "Computer Science",
            )
    assignment28 = Assignment(
            title="Data Science and Machine Learning: Exploring the Power of Data",
            class_id=4,
            instructions="In this assignment, you will explore the exciting field of data science and machine learning, uncovering the power of data in extracting valuable insights and making predictions. You will study concepts such as data preprocessing, exploratory data analysis, statistical modeling, and machine learning algorithms. Through data manipulation, visualization, and model building exercises, you will gain hands-on experience in analyzing real-world datasets and developing predictive models. Additionally, you will explore ethical considerations in data science, such as bias and privacy, and discuss the societal impact of machine learning applications. This assignment aims to enhance your understanding of data-driven decision-making, cultivate your analytical skills, and highlight the potential of data science and machine learning in various domains.",
            points = 100,
            due_date = datetime(2023, 6, 25),
            topic = "Computer Science",
            )
    assignment29 = Assignment(
            title="Cultural Immersion: Exploring Spanish-Speaking Countries",
            class_id=5,
            instructions=" In this assignment, you will embark on a cultural immersion journey, exploring the rich traditions and diverse cultures of Spanish-speaking countries. You will choose a specific country or region of interest and research its history, geography, language variations, traditions, festivals, cuisine, and artistic expressions. Through presentations, written reports, and creative projects, you will showcase your understanding and appreciation of the cultural aspects unique to your chosen destination. Additionally, you will have the opportunity to practice your Spanish language skills by engaging in conversations, role-plays, and interactive activities related to the culture of your chosen country. This assignment aims to broaden your cultural awareness, deepen your understanding of the Spanish-speaking world, and enhance your language proficiency.",
            points = 100,
            due_date = datetime(2023, 6, 15),
            topic = "Spanish",
            )
    assignment30 = Assignment(
            title="Literary Exploration: Analyzing Spanish Language Literature",
            class_id=5,
            instructions="In this assignment, you will embark on a literary exploration of Spanish language literature, delving into the works of influential writers and poets. You will study literary genres such as novels, short stories, poems, and plays, focusing on Spanish-speaking authors from different time periods and regions. Through close reading, analysis, and discussions, you will examine the themes, literary techniques, and social contexts in these literary works. Additionally, you will have the opportunity to express your insights and interpretations through written reflections and creative responses. This assignment aims to deepen your appreciation for Spanish language literature, enhance your reading and critical thinking skills, and foster a love for literary exploration in the Spanish language.",
            points = 100,
            due_date = datetime(2023, 6, 20),
            topic = "Spanish",
            )
    assignment31 = Assignment(
            title="Language and Society: Spanish in the Global Context",
            class_id=5,
            instructions="In this assignment, you will explore the role of the Spanish language in the global context, analyzing its significance and impact on societies around the world. You will study the spread and influence of Spanish-speaking communities, both within Spanish-speaking countries and in diaspora communities. Through research, presentations, and discussions, you will examine topics such as language policies, linguistic diversity, bilingualism, and language preservation efforts. Additionally, you will explore the relationship between language and identity, considering how the Spanish language shapes cultural expressions and individual experiences. This assignment aims to broaden your understanding of the socio-cultural aspects of the Spanish language, foster intercultural competence, and encourage critical reflection on language dynamics in diverse contexts.",
            points = 100,
            due_date = datetime(2023, 6, 24),
            topic = "Spanish",
            )


































    db.session.add(assignment1)
    db.session.add(assignment2)
    db.session.add(assignment3)
    db.session.add(assignment4)
    db.session.add(assignment5)
    db.session.add(assignment6)
    db.session.add(assignment7)
    db.session.add(assignment8)
    db.session.add(assignment9)
    db.session.add(assignment10)
    db.session.add(assignment11)
    db.session.add(assignment12)
    db.session.add(assignment13)
    db.session.add(assignment14)
    db.session.add(assignment15)
    db.session.add(assignment16)
    db.session.add(assignment17)
    db.session.add(assignment18)
    db.session.add(assignment19)
    db.session.add(assignment20)
    db.session.add(assignment21)
    db.session.add(assignment22)
    db.session.add(assignment23)
    db.session.add(assignment24)
    db.session.add(assignment25)
    db.session.add(assignment26)
    db.session.add(assignment27)
    db.session.add(assignment28)
    db.session.add(assignment29)
    db.session.add(assignment30)
    db.session.add(assignment31)

    db.session.commit()


def undo_assignments():

    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.assignments RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM assignments")

    db.session.commit()
