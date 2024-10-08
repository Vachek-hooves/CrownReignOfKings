export const CROWN_DATA = [
  {
    levelScore: '0',
    id: 'war1',
    name: 'War or Peace',
    isActive: true,
    about:
      'Your father, the esteemed king of the grand kingdom of Arden, has recently passed away, and the throne has passed to you. From the very start, your reign is fraught with complex challenges: enemies at the borders, court intrigues, discontent among the peasants, and economic instability. Your task is to make crucial decisions that will shape the fate of the kingdom and your legacy as a ruler.',
    questionsArray: [
      {
        id: 'war1',
        options: [
          'Direct assault on the besieging forces.',
          'Undermining morale through starvation and endurance.',
          'Evacuating the fortress and negotiating a peace treaty.        ',
        ],
        question:
          'What strategy is best for defending a fortress during a prolonged siege?',
        correct: 'Undermining morale through starvation and endurance.',
      },
      {
        id: 'war2',
        options: [
          'Providing regular victories.',
          'Ensuring adequate supplies and rest.',
          'Maintaining strict discipline.',
        ],
        question:
          'What is a key element of maintaining morale among troops during a long campaign?',
        correct: 'Ensuring adequate supplies and rest.',
      },
      {
        id: 'war3',
        options: [
          'Form alliances and seek mutual support.',
          'Engage in diplomatic negotiations to avoid conflict.',
          'Focus solely on military preparations, ignoring diplomacy.',
        ],
        question:
          'How should you manage relations with neighboring states if you are preparing for a major conflict?',
        correct: 'Form alliances and seek mutual support.',
      },
      {
        id: 'war4',
        options: [
          'Use them to spread disinformation among enemy ranks.',
          'Gather intelligence on enemy troop movements and strategies.',
          'Deploy them to sabotage enemy resources directly.',
        ],
        question:
          'What is the most effective way to utilize spies during wartime?',
        correct: 'Gather intelligence on enemy troop movements and strategies.',
      },
      {
        id: 'war5',
        options: [
          'The size and strength of the attacking army.',
          'The fortifications and defenses of the besieged location.',
          'The weather conditions during the siege.',
        ],
        question:
          'What is a crucial factor in the success of a siege warfare strategy?',
        correct: 'The fortifications and defenses of the besieged location.',
      },
      {
        id: 'war6',
        options: [
          'Use heavy artillery to breach the walls.',
          'Starve out the defenders by cutting off supplies.',
          'Offer a generous surrender deal to the defenders.',
        ],
        question:
          'What is an effective method to break a siege if you are the attacker?',
        correct: 'Starve out the defenders by cutting off supplies.',
      },
      {
        id: 'war7',
        options: [
          'Focus on building more weapons and armor.',
          'Invest in fortifications and defensive structures.',
          'Balance resources between offense and defense.',
        ],
        question:
          'How should you allocate resources during a prolonged military campaign?',
        correct: 'Focus on building more weapons and armor.',
      },
      {
        id: 'war8',
        options: [
          "Increase your own propaganda efforts to counteract the enemy's.",
          'Focus on military victories to overshadow enemy messages.',
          'Engage in diplomatic efforts to discredit enemy propaganda.',
        ],
        question:
          'What is the best way to counteract enemy propaganda during a war?',
        correct:
          "Increase your own propaganda efforts to counteract the enemy's.",
      },
      {
        id: 'war9',
        options: [
          'Use messenger pigeons and couriers.',
          'Establish a network of signal fires and beacons.',
          'Maintain constant verbal updates through regular meetings.',
        ],
        question:
          'How can you ensure effective communication with your generals during a campaign?',
        correct: 'Use messenger pigeons and couriers.',
      },
      {
        id: 'war10',
        options: [
          'The terrain and natural obstacles.',
          'The number of enemy troops.',
          'The timing of the battle.',
        ],
        question:
          'What is a critical consideration when planning a defensive battle strategy?',
        correct: 'The terrain and natural obstacles.',
      },
      {
        id: 'war11',
        options: [
          'Mobilize all available troops immediately.',
          "Send scouts to gather information on the enemy's strength.",
          'Evacuate civilians and focus on defensive positions.',
        ],
        question: 'How should you respond to a surprise attack by the enemy?',
        correct: 'Mobilize all available troops immediately.',
      },
      {
        id: 'war12',
        options: [
          'High morale boosts performance and resilience.',
          'Morale has little impact on actual combat effectiveness.',
          'Low morale can be overcome with additional training.',
        ],
        question:
          'What role does morale play in the effectiveness of your troops?',
        correct: 'High morale boosts performance and resilience.',
      },
      {
        id: 'war13',
        options: [
          'Position troops on high ground for a tactical advantage.',
          'Use natural obstacles to hinder enemy movement.',
          'Avoid complex terrain to maintain mobility.',
        ],
        question: 'How can you use terrain to your advantage in battle?',
        correct: 'Position troops on high ground for a tactical advantage.',
      },
      {
        id: 'war14',
        options: [
          'Execute them to set an example.',
          'Offer incentives to those who stay loyal.',
          'Investigate the reasons for desertion and address underlying issues.',
        ],
        question: 'What is the best way to handle deserters in your army?',
        correct: 'Execute them to set an example.',
      },
      {
        id: 'war15',
        options: [
          'Establish reliable supply lines and stockpiles.',
          'Rely on local resources and foraging.',
          'Negotiate supply agreements with allies.',
        ],
        question:
          'How can you ensure that your army is well-supplied during a campaign?',
        correct: 'Establish reliable supply lines and stockpiles.',
      },
      {
        id: 'war16',
        options: [
          'The weather and sea conditions.',
          'The number of enemy ships.',
          'The speed of your vessels.',
        ],
        question:
          'What is an important consideration when planning a naval engagement?',
        correct: 'The weather and sea conditions.',
      },
      {
        id: 'war17',
        options: [
          'Rotate troops to reduce fatigue and losses.',
          'Focus on quick, decisive battles to avoid prolonged engagements.',
          'Increase recruitment to replace lost soldiers.',
        ],
        question:
          'How should you address the issue of attrition in your forces?',
        correct: 'Rotate troops to reduce fatigue and losses.',
      },
      {
        id: 'war18',
        options: [
          'To breach fortifications and walls.',
          'To transport troops and supplies.',
          'To create a psychological impact on the defenders.',
        ],
        question: 'What is the primary purpose of constructing siege engines?',
        correct: 'To breach fortifications and walls.',
      },
      {
        id: 'war19',
        options: [
          'Secure military aid and joint operations.',
          'Focus on economic and trade agreements.',
          'Establish cultural and diplomatic ties.',
        ],
        question:
          'How can you leverage alliances to strengthen your military position?',
        correct: 'Secure military aid and joint operations.',
      },
      {
        id: 'war20',
        options: [
          'Release them to foster goodwill and future negotiations.',
          'Use them as forced labor for your war efforts.',
          'Integrate them into your own forces if feasible.',
        ],
        question:
          'What is the best strategy for managing captured enemy soldiers?',
        correct: 'Release them to foster goodwill and future negotiations.',
      },
    ],
  },
  {
    levelScore: '0',
    id: 'tax1',
    name: 'Peasant Rebellion',
    about:
      'Due to increased taxes to fund the army, peasants are beginning to revolt. You face demands for change or the situation will escalate.',
    isActive: false,
    questionsArray: [
      {
        id: 'tax1',
        options: [
          'Increase taxes for the wealthy and nobility.',
          'Uniform taxation across all social classes.',
          'Introduce new taxes on luxury goods.',
        ],
        question:
          'What tax approach is most effective for maintaining the economy during wartime?',
        correct: 'Introduce new taxes on luxury goods.',
      },
      {
        id: 'tax2',
        options: [
          'Implement gradual increases to avoid sudden shocks.',
          'Ensure transparency and fairness in tax collection.',
          'Provide incentives for compliance.',
        ],
        question:
          'How can you ensure that new tax policies do not lead to widespread unrest?',
        correct: 'Ensure transparency and fairness in tax collection.',
      },
      {
        id: 'tax3',
        options: [
          'Implementing immediate and visible improvements in public services.',
          'Providing clear communication about the reasons for the tax increases.',
          'Offering tax breaks to specific groups.',
        ],
        question:
          'What is a critical component of managing public dissatisfaction with tax increases?',
        correct:
          'Providing clear communication about the reasons for the tax increases.',
      },
      {
        id: 'tax4',
        options: [
          'Cut funding to non-essential government programs.',
          'Increase taxes on all income levels.',
          'Seek loans from wealthy merchants or neighboring kingdoms.',
        ],
        question:
          'How should you balance the budget when facing a fiscal deficit during a war?',
        correct: 'Cut funding to non-essential government programs.',
      },
      {
        id: 'tax5',
        options: [
          'Diversify the economy by investing in various sectors.',
          'Focus on expanding military expenditures to ensure security.',
          'Prioritize short-term gains to address immediate financial needs.',
        ],
        question:
          'What is the best approach to maintaining long-term economic stability?',
        correct: 'Diversify the economy by investing in various sectors.',
      },
      {
        id: 'tax6',
        options: [
          'Provide subsidies and support to affected businesses.',
          'Increase taxes on businesses to fund the war effort.',
          'Implement price controls to stabilize the market.',
        ],
        question:
          'How should you address the economic impact of war on local businesses?',
        correct: 'Provide subsidies and support to affected businesses.',
      },
      {
        id: 'tax7',
        options: [
          'Control the supply of money in circulation.',
          'Increase interest rates to reduce borrowing.',
          'Implement wage controls and rationing.',
        ],
        question:
          'What is an effective strategy for managing inflation during wartime?',
        correct: 'Control the supply of money in circulation.',
      },
      {
        id: 'tax8',
        options: [
          'Implement progressive tax rates based on income levels.',
          'Use a flat tax rate for simplicity.',
          'Provide exemptions for certain groups.',
        ],
        question:
          'How can you ensure fairness in the distribution of tax burdens?',
        correct: 'Implement progressive tax rates based on income levels.',
      },
      {
        id: 'tax9',
        options: [
          'Use public speeches and media announcements.',
          'Directly address concerns through town hall meetings.',
          'Issue official decrees and written statements.',
        ],
        question:
          'What is the best way to communicate the need for tax increases to the public?',
        correct: 'Use public speeches and media announcements.',
      },
      {
        id: 'tax10',
        options: [
          'Prioritize essential services and public welfare.',
          'Allocate funds based on political influence.',
          'Focus on debt repayment and interest obligations.',
        ],
        question:
          'How should you manage the allocation of government funds during a crisis?',
        correct: 'Prioritize essential services and public welfare.',
      },
      {
        id: 'tax11',
        options: [
          'It builds trust and reduces resistance to policy changes.',
          'It has little impact on public perception.',
          'It can lead to political challenges and opposition.',
        ],
        question:
          'What role does transparency play in managing public finances?',
        correct: 'It builds trust and reduces resistance to policy changes.',
      },
      {
        id: 'tax12',
        options: [
          'Implement strict oversight and auditing procedures.',
          'Increase penalties for corrupt practices.',
          'Encourage anonymous reporting of corruption.',
        ],
        question: 'How can you address potential corruption in tax collection?',
        correct: 'Implement strict oversight and auditing procedures.',
      },
      {
        id: 'tax13',
        options: [
          'Engage in dialogue and negotiate with protest leaders.',
          'Use law enforcement to disperse the crowds.',
          'Implement immediate policy changes to address concerns.',
        ],
        question:
          'What is the best approach to handling large-scale public protests against tax policies?',
        correct: 'Engage in dialogue and negotiate with protest leaders.',
      },
      {
        id: 'tax14',
        options: [
          'Provide targeted financial aid and social programs.',
          'Implement broad-based economic stimulus measures.',
          'Increase public works projects to create jobs.',
        ],
        question:
          'How can you support the most vulnerable populations during economic hardships?',
        correct: 'Provide targeted financial aid and social programs.',
      },
      {
        id: 'tax15',
        options: [
          'Offer incentives for early payment and compliance.',
          'Implement strict enforcement and penalties for non-compliance.',
          'Simplify tax procedures to reduce administrative burdens.',
        ],
        question:
          'What is the best way to encourage compliance with new tax policies?',
        correct: 'Offer incentives for early payment and compliance.',
      },
      {
        id: 'tax16',
        options: [
          'Increase audits and enforcement actions.',
          'Provide amnesty periods for voluntary disclosure.',
          'Reduce tax rates to encourage compliance.',
        ],
        question:
          'How should you address the issue of tax evasion during wartime?',
        correct: 'Increase audits and enforcement actions.',
      },
      {
        id: 'tax17',
        options: [
          'Use economic modeling and simulations.',
          'Rely on historical data and trends.',
          'Consult with financial experts and advisors.',
        ],
        question:
          'What is an effective method for forecasting economic impacts of tax changes?',
        correct: 'Use economic modeling and simulations.',
      },
      {
        id: 'tax18',
        options: [
          'Demonstrate clear and measurable outcomes from the reforms.',
          'Rely on media campaigns and public relations.',
          'Conduct regular surveys and feedback sessions.',
        ],
        question: 'How can you improve public confidence in economic reforms?',
        correct: 'Demonstrate clear and measurable outcomes from the reforms.',
      },
      {
        id: 'tax19',
        options: [
          'Negotiate debt relief and restructuring agreements.',
          'Increase taxes to service the debt.',
          'Cut government spending and programs.',
        ],
        question:
          'What is the best way to manage government debt during a financial crisis?',
        correct: 'Negotiate debt relief and restructuring agreements.',
      },
      {
        id: 'tax20',
        options: [
          'Focus on military and defense expenditures.',
          'Allocate resources to economic recovery and development.',
          'Balance spending between defense and public welfare.',
        ],
        question: 'How should you prioritize government spending during a war?',
        correct: 'Focus on military and defense expenditures.',
      },
    ],
  },
  {
    levelScore: '0',
    id: 'royal',
    name: 'The Royal Heir',
    about:
      'You must choose your successor. Your children have different abilities and ambitions: one is a military leader, another is a diplomat and strategist. The choice of heir will have a decisive impact on the future of the kingdom.',
    isActive: false,
    questionsArray: [
      {
        id: 'succession1',
        options: [
          'A) Rapid transfer of power to the successor with military support.',
          'B) Conduct a lengthy transitional period with political consultations.',
          'C) Strengthen legal succession by forming alliances with neighboring kingdoms.',
        ],
        question:
          'What is the best approach to ensure a smooth transition of power?',
        correct:
          'C) Strengthen legal succession by forming alliances with neighboring kingdoms.',
      },
      {
        id: 'succession2',
        options: [
          'A) Provide them with hands-on experience in governance.',
          'B) Educate them through formal training and advisory councils.',
          'C) Allow them to make decisions and learn from their mistakes.',
        ],
        question: 'How can you prepare your heir for leadership effectively?',
        correct: 'A) Provide them with hands-on experience in governance.',
      },
      {
        id: 'succession3',
        options: [
          'A) Demonstrating strong leadership skills and decisiveness.',
          'B) Building personal relationships with the nobility.',
          'C) Providing financial incentives and privileges.',
        ],
        question:
          'What is a key factor in ensuring the successor gains the support of the nobility?',
        correct: 'A) Demonstrating strong leadership skills and decisiveness.',
      },
      {
        id: 'succession4',
        options: [
          'A) Secure public endorsement through a formal ceremony.',
          'B) Address and resolve any legal disputes regarding succession.',
          'C) Strengthen the successor’s position through military demonstrations.',
        ],
        question:
          'How should you address potential challenges to the successor’s legitimacy?',
        correct: 'A) Secure public endorsement through a formal ceremony.',
      },
      {
        id: 'succession5',
        options: [
          'A) Implement reforms that address current issues and gain popular support.',
          'B) Increase military presence and security measures.',
          'C) Conduct a thorough review of the kingdom’s laws and governance structure.',
        ],
        question:
          'What is the most effective way to maintain stability during the succession process?',
        correct:
          'A) Implement reforms that address current issues and gain popular support.',
      },
      {
        id: 'succession6',
        options: [
          'A) Provide training in diplomatic negotiations and statecraft.',
          'B) Engage them in foreign policy discussions and negotiations.',
          'C) Rely on experienced diplomats to guide the successor.',
        ],
        question:
          'How can you ensure that your successor is prepared to handle foreign diplomacy?',
        correct:
          'A) Provide training in diplomatic negotiations and statecraft.',
      },
      {
        id: 'succession7',
        options: [
          'A) It influences the acceptance and legitimacy of the new ruler.',
          'B) It has minimal impact on the actual governance.',
          'C) It can be managed through media and propaganda.',
        ],
        question:
          'What role does public perception play in the succession process?',
        correct:
          'A) It influences the acceptance and legitimacy of the new ruler.',
      },
      {
        id: 'succession8',
        options: [
          'A) Seek to unite factions through compromise and negotiation.',
          'B) Suppress dissenting factions to maintain control.',
          'C) Align with the most powerful faction for support.',
        ],
        question:
          'How should you manage internal political factions during the succession?',
        correct:
          'A) Seek to unite factions through compromise and negotiation.',
      },
      {
        id: 'succession9',
        options: [
          'A) Providing them with military training and experience.',
          'B) Ensuring they have strong diplomatic skills.',
          'C) Focusing on their strategic and financial acumen.',
        ],
        question:
          'What is a crucial aspect of preparing the successor for military leadership?',
        correct: 'A) Providing them with military training and experience.',
      },
      {
        id: 'succession10',
        options: [
          'A) Facilitate open dialogue and negotiations.',
          'B) Replace advisors who are resistant to the successor.',
          'C) Strengthen the successor’s authority through decrees.',
        ],
        question:
          'How can you address potential conflicts between the successor and influential advisors?',
        correct: 'A) Facilitate open dialogue and negotiations.',
      },
      {
        id: 'succession11',
        options: [
          'A) Maintain existing policies and structures.',
          'B) Implement immediate changes to align with the successor’s vision.',
          'C) Consult with previous advisors to guide the transition.',
        ],
        question:
          'What is the best way to ensure continuity in governance during the transition period?',
        correct:
          'B) Implement immediate changes to align with the successor’s vision.',
      },
      {
        id: 'succession12',
        options: [
          'A) Offer them positions of power or influence.',
          'B) Use legal and political means to neutralize their claims.',
          'C) Seek to reconcile and integrate them into the ruling structure.',
        ],
        question:
          'How should you handle opposition from rival claimants to the throne?',
        correct: 'B) Use legal and political means to neutralize their claims.',
      },
    ],
  },
];

export const FACTS = [
  {
    id: 'fa1',
    name: 'The Crown of Saint Edward',
    fact: 'One of the oldest crowns of Great Britain, used for the coronation of English monarchs since 1066. It symbolizes the sanctity and divine legitimacy of royal authority.',
    image: '',
  },
  {
    id: 'fa2',
    name: 'The French Crown of Louis IX',
    fact: 'Made in the 13th century, this crown became a symbol of the saintly royal status. Louis IX, also known as Saint Louis, was canonized for his devout rule.',
    image: '',
  },
  {
    id: 'fa3',
    name: 'The Crown of the Holy Roman Empire',
    fact: 'Crafted in the 11th century, this crown was a significant symbol of imperial authority in the Holy Roman Empire and featured numerous precious stones and gold embellishments.',
    image: '',
  },
  {
    id: 'fa4',
    name: 'The Crown of the Spanish Monarchs',
    fact: 'Noted for its opulence, it includes gilded and red enamel, symbolizing the unification of Castile and Aragon under the Catholic Monarchs.',
    image: '',
  },
  {
    id: 'fa5',
    name: 'The Crown of the Duke of Kiel',
    fact: 'Made in the 16th century, this crown is a striking example of Renaissance art. It held great significance for the Dukes of Kiel and symbolized their power in medieval Europe.',
    image: '',
  },
  {
    id: 'fa6',
    name: 'The Danish Crown',
    fact: 'Worn by Danish kings since the 15th century, this crown is distinguished by its simple yet elegant design and use of northern motifs.',
    image: '',
  },
  {
    id: 'fa7',
    name: 'The Prussian Crown',
    fact: 'Crafted for the coronation of the Prussian king in the 18th century, this crown is noted for its stern appearance and symbolized the absolutist power of the Prussian monarchs.',
    image: '',
  },
];

export const ENCYCLOPEDIA = [
  {
    name: 'Charles the Great',
    story:
      'Charlemagne, also known as Charles the Great, was the King of the Franks from 768 and Emperor of the Holy Roman Empire from 800. He united a significant part of Western Europe, restoring political unity after the fall of the Roman Empire and laying the foundations for the future development of European states. Under his rule, the empire reached its peak, known as the Carolingian Renaissance. Charlemagne implemented administrative reforms, such as codifying laws and organizing administrative structures, which allowed him to effectively govern the vast empire. He also actively supported education, establishing schools and scriptoria that helped preserve and develop knowledge. Additionally, Charlemagne was a powerful defender of Christianity, engaging in missionary activities and religious reforms that strengthened the church.',
    image: require('../assets/img/encyclopedia/CharlesGreat.png'),
  },
  {
    name: 'Elizabeth I (England)',
    story:
      'Elizabeth I, Queen of England from 1558 to 1603, became a symbol of stability and revival after religious and political upheavals. Her reign, known as the Elizabethan Era, brought significant achievements in literature, science, and maritime exploration. Elizabeth demonstrated outstanding political wisdom, enabling her to manage numerous challenges, such as religious wars and threats from Spain. Her diplomatic skills ensured peace and stability in the country, as well as important trade agreements that contributed to economic growth. Elizabeth supported the development of the English Renaissance, which became a golden age of English culture, thanks to prominent figures like William Shakespeare. Her reign also saw major geographical discoveries as English explorers expanded British territories and influence.',
    image: require('../assets/img/encyclopedia/elizabeth1.png'),
  },
  {
    name: 'Louis XIV (France)',
    story:
      "Louis XIV, known as the Sun King, ruled France from 1643 to 1715, and his reign became a symbol of absolute monarchy. Louis XIV centralized power, eliminating all possible opposition and controlling all aspects of state governance. His reign is also known for the construction of the Palace of Versailles, which became the political and cultural center of France. The Palace of Versailles not only served as the king's residence but also symbolized his power and absolute authority. Louis XIV actively pursued military conquests and expansion of French influence, leading to numerous wars, such as the War of the Spanish Succession. Although his ambitions brought significant territorial gains to France, they also imposed a heavy financial burden on the country, ultimately contributing to economic and social problems.",
    image: require('../assets/img/encyclopedia/louis.png'),
  },
  {
    name: 'Frederick the Great (Prussia)',
    story:
      "Frederick the Great, or Frederick II, ruled Prussia from 1740 to 1786 and left a significant mark on history through his military and administrative reforms. Frederick the Great was regarded as an outstanding military leader and strategist, with his reign known for numerous victories in wars, particularly during the Seven Years' War. He implemented a series of reforms in government that included centralizing power, modernizing the army and administration, which allowed Prussia to become one of the leading European powers. Frederick the Great also supported cultural and scientific development, fostering the work of notable figures such as Voltaire and Goethe. His reign was a period of significant social and economic changes, which laid the foundation for the future development of Germany.",
    image: require('../assets/img/encyclopedia/fredy.png'),
  },
];

export const MUSEUM = [
  {
    crown: 'Crown of Charlemagne',
    about:
      "A famous symbol of Charlemagne's rule, representing the unity of the Carolingian Empire and the Holy Roman Empire.",
    image: require('../assets/img/museum/Charlemagne.png'),
  },
  {
    crown: "St. Edward's Crown",
    about:
      'The traditional English crown used in the coronation of monarchs. It is named after Edward the Confessor and is a key symbol of the British monarchy.',
    image: require('../assets/img/museum/edward.png'),
  },
  {
    crown: 'Crown of Louis XIV',
    about:
      "The crown worn by Louis XIV of France, representing the grandeur and absolute power of the French monarchy during the Sun King's reign.",
    image: require('../assets/img/museum/lois.png'),
  },
  {
    crown: 'Crown of Frederick the Great',
    about:
      'The crown was used by Frederick II of Prussia, symbolizing his military and administrative reforms that transformed Prussia into a major European power.',
    image: require('../assets/img/museum/Frederick.png'),
  },
  {
    crown: 'Crown of Elizabeth I',
    about:
      'The crown worn by Queen Elizabeth I of England, reflecting the stability and cultural renaissance of her reign during the Elizabethan Era.',
    image: require('../assets/img/museum/elizabeth.png'),
  },
  {
    crown: 'Crown of the Holy Roman Empire',
    about:
      'Also known as the Imperial Crown of the Holy Roman Empire, it was used for the coronation of Holy Roman Emperors and symbolizes the unity of the empire.',
    image: require('../assets/img/museum/roman.png'),
  },
  {
    crown: 'Crown of the Byzantine Empire',
    about:
      'A richly decorated crown used by Byzantine emperors, symbolizing the authority and divine right of the Byzantine rulers.',
    image: require('../assets/img/museum/Byzantine.png'),
  },
  {
    crown: 'Crown of the Kingdom of Scotland',
    about:
      'The crown used by Spanish monarchs, reflecting the long history and various dynastic changes in Spain.',
    image: require('../assets/img/museum/spain.png'),
  },
];
