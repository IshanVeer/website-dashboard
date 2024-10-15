export const getUsers = async (tab) => {
  let URL = {
    in_discord: `${API_BASE_URL}/users/search/?role=in_discord`,
    verified: `${API_BASE_URL}/users/search/?verified=true`,
  };

  try {
    const response = await fetch(URL[tab], {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-type': 'application/json',
      },
    });

    const data = await response.json();
    return data.users ?? [];
  } catch (err) {
    console.error(err);
  }
};
// mock user data
export const mockUsersData = {
  in_discord: [
    {
      id: 'user_1',
      discordId: '123456789',
      username: 'Alice',
      avatar: 'https://placekitten.com/50/50?image=1',
    },
    {
      id: 'user_2',
      username: 'Bob',
      avatar: 'https://placekitten.com/50/50?image=2',
    },
    {
      id: 'user_3',
      username: 'Charlie',
      avatar: 'https://placekitten.com/50/50?image=3',
    },
    {
      id: 'user_4',
      username: 'David',
      avatar: 'https://placekitten.com/50/50?image=4',
    },
    {
      id: 'user_5',
      username: 'Eve',
      avatar: 'https://placekitten.com/50/50?image=5',
    },
    {
      id: 'user_6',
      username: 'Fay',
      avatar: 'https://placekitten.com/50/50?image=6',
    },
    {
      id: 'user_7',
      username: 'George',
      avatar: 'https://placekitten.com/50/50?image=7',
    },
    {
      id: 'user_8',
      username: 'Hannah',
      avatar: 'https://placekitten.com/50/50?image=8',
    },
    {
      id: 'user_9',
      username: 'Isaac',
      avatar: 'https://placekitten.com/50/50?image=9',
    },
    {
      id: 'user_10',
      username: 'Jill',
      avatar: 'https://placekitten.com/50/50?image=10',
    },
    {
      id: 'user_11',
      username: 'Karl',
      avatar: 'https://placekitten.com/50/50?image=11',
    },
    {
      id: 'user_12',
      username: 'Lily',
      avatar: 'https://placekitten.com/50/50?image=12',
    },
    {
      id: 'user_13',
      username: 'Max',
      avatar: 'https://placekitten.com/50/50?image=13',
    },
    {
      id: 'user_14',
      username: 'Nina',
      avatar: 'https://placekitten.com/50/50?image=14',
    },
    {
      id: 'user_15',
      username: 'Oscar',
      avatar: 'https://placekitten.com/50/50?image=15',
    },
    {
      id: 'user_16',
      username: 'Pam',
      avatar: 'https://placekitten.com/50/50?image=16',
    },
    {
      id: 'user_17',
      username: 'Quinn',
      avatar: 'https://placekitten.com/50/50?image=17',
    },
    {
      id: 'user_18',
      username: 'Rachel',
      avatar: 'https://placekitten.com/50/50?image=18',
    },
    {
      id: 'user_19',
      username: 'Sam',
      avatar: 'https://placekitten.com/50/50?image=19',
    },
    {
      id: 'user_20',
      username: 'Tina',
      avatar: 'https://placekitten.com/50/50?image=20',
    },
    {
      id: 'user_21',
      username: 'Uma',
      avatar: 'https://placekitten.com/50/50?image=21',
    },
    {
      id: 'user_22',
      username: 'Victor',
      avatar: 'https://placekitten.com/50/50?image=22',
    },
    {
      id: 'user_23',
      username: 'Wendy',
      avatar: 'https://placekitten.com/50/50?image=23',
    },
    {
      id: 'user_24',
      username: 'Xander',
      avatar: 'https://placekitten.com/50/50?image=24',
    },
    {
      id: 'user_25',
      username: 'Yvonne',
      avatar: 'https://placekitten.com/50/50?image=25',
    },
    {
      id: 'user_26',
      username: 'Zack',
      avatar: 'https://placekitten.com/50/50?image=26',
    },
    {
      id: 'user_27',
      username: 'Aaron',
      avatar: 'https://placekitten.com/50/50?image=27',
    },
    {
      id: 'user_28',
      username: 'Bianca',
      avatar: 'https://placekitten.com/50/50?image=28',
    },
    {
      id: 'user_29',
      username: 'Carlos',
      avatar: 'https://placekitten.com/50/50?image=29',
    },
    {
      id: 'user_30',
      username: 'Diana',
      avatar: 'https://placekitten.com/50/50?image=30',
    },
    {
      id: 'user_31',
      username: 'Eli',
      avatar: 'https://placekitten.com/50/50?image=31',
    },
    {
      id: 'user_32',
      username: 'Fiona',
      avatar: 'https://placekitten.com/50/50?image=32',
    },
    {
      id: 'user_33',
      username: 'Gus',
      avatar: 'https://placekitten.com/50/50?image=33',
    },
    {
      id: 'user_34',
      username: 'Holly',
      avatar: 'https://placekitten.com/50/50?image=34',
    },
    {
      id: 'user_35',
      username: 'Ian',
      avatar: 'https://placekitten.com/50/50?image=35',
    },
    {
      id: 'user_36',
      username: 'Julia',
      avatar: 'https://placekitten.com/50/50?image=36',
    },
    {
      id: 'user_37',
      username: 'Kevin',
      avatar: 'https://placekitten.com/50/50?image=37',
    },
    {
      id: 'user_38',
      username: 'Laura',
      avatar: 'https://placekitten.com/50/50?image=38',
    },
    {
      id: 'user_39',
      username: 'Mike',
      avatar: 'https://placekitten.com/50/50?image=39',
    },
    {
      id: 'user_40',
      username: 'Nora',
      avatar: 'https://placekitten.com/50/50?image=40',
    },
    {
      id: 'user_41',
      username: 'Oliver',
      avatar: 'https://placekitten.com/50/50?image=41',
    },
    {
      id: 'user_42',
      username: 'Paula',
      avatar: 'https://placekitten.com/50/50?image=42',
    },
    {
      id: 'user_43',
      username: 'Quincy',
      avatar: 'https://placekitten.com/50/50?image=43',
    },
    {
      id: 'user_44',
      username: 'Rose',
      avatar: 'https://placekitten.com/50/50?image=44',
    },
    {
      id: 'user_45',
      username: 'Steve',
      avatar: 'https://placekitten.com/50/50?image=45',
    },
    {
      id: 'user_46',
      username: 'Tara',
      avatar: 'https://placekitten.com/50/50?image=46',
    },
    {
      id: 'user_47',
      username: 'Ulysses',
      avatar: 'https://placekitten.com/50/50?image=47',
    },
    {
      id: 'user_48',
      username: 'Violet',
      avatar: 'https://placekitten.com/50/50?image=48',
    },
    {
      id: 'user_49',
      username: 'Wes',
      avatar: 'https://placekitten.com/50/50?image=49',
    },
    {
      id: 'user_50',
      username: 'Xena',
      avatar: 'https://placekitten.com/50/50?image=50',
    },
  ],
  verified: [
    {
      id: 'user_51',
      username: 'Frank',
      avatar: 'https://placekitten.com/50/50?image=51',
    },
    {
      id: 'user_52',
      username: 'Grace',
      avatar: 'https://placekitten.com/50/50?image=52',
    },
    {
      id: 'user_53',
      username: 'Henry',
      avatar: 'https://placekitten.com/50/50?image=53',
    },
    {
      id: 'user_54',
      username: 'Ivy',
      avatar: 'https://placekitten.com/50/50?image=54',
    },
    {
      id: 'user_55',
      username: 'Jack',
      avatar: 'https://placekitten.com/50/50?image=55',
    },
    {
      id: 'user_56',
      username: 'Kim',
      avatar: 'https://placekitten.com/50/50?image=56',
    },
    {
      id: 'user_57',
      username: 'Leo',
      avatar: 'https://placekitten.com/50/50?image=57',
    },
    {
      id: 'user_58',
      username: 'Mila',
      avatar: 'https://placekitten.com/50/50?image=58',
    },
    {
      id: 'user_59',
      username: 'Nate',
      avatar: 'https://placekitten.com/50/50?image=59',
    },
    {
      id: 'user_60',
      username: 'Olivia',
      avatar: 'https://placekitten.com/50/50?image=60',
    },
    {
      id: 'user_61',
      username: 'Paul',
      avatar: 'https://placekitten.com/50/50?image=61',
    },
    {
      id: 'user_62',
      username: 'Quinn',
      avatar: 'https://placekitten.com/50/50?image=62',
    },
    {
      id: 'user_63',
      username: 'Ruby',
      avatar: 'https://placekitten.com/50/50?image=63',
    },
    {
      id: 'user_64',
      username: 'Steve',
      avatar: 'https://placekitten.com/50/50?image=64',
    },
    {
      id: 'user_65',
      username: 'Tina',
      avatar: 'https://placekitten.com/50/50?image=65',
    },
    {
      id: 'user_66',
      username: 'Ulysses',
      avatar: 'https://placekitten.com/50/50?image=66',
    },
    {
      id: 'user_67',
      username: 'Vera',
      avatar: 'https://placekitten.com/50/50?image=67',
    },
    {
      id: 'user_68',
      username: 'Walter',
      avatar: 'https://placekitten.com/50/50?image=68',
    },
    {
      id: 'user_69',
      username: 'Xena',
      avatar: 'https://placekitten.com/50/50?image=69',
    },
    {
      id: 'user_70',
      username: 'Yvonne',
      avatar: 'https://placekitten.com/50/50?image=70',
    },
    {
      id: 'user_71',
      username: 'Zane',
      avatar: 'https://placekitten.com/50/50?image=71',
    },
    {
      id: 'user_72',
      username: 'Alan',
      avatar: 'https://placekitten.com/50/50?image=72',
    },
    {
      id: 'user_73',
      username: 'Bella',
      avatar: 'https://placekitten.com/50/50?image=73',
    },
    {
      id: 'user_74',
      username: 'Chris',
      avatar: 'https://placekitten.com/50/50?image=74',
    },
    {
      id: 'user_75',
      username: 'Daisy',
      avatar: 'https://placekitten.com/50/50?image=75',
    },
    {
      id: 'user_76',
      username: 'Ethan',
      avatar: 'https://placekitten.com/50/50?image=76',
    },
    {
      id: 'user_77',
      username: 'Faye',
      avatar: 'https://placekitten.com/50/50?image=77',
    },
    {
      id: 'user_78',
      username: 'Gavin',
      avatar: 'https://placekitten.com/50/50?image=78',
    },
    {
      id: 'user_79',
      username: 'Holly',
      avatar: 'https://placekitten.com/50/50?image=79',
    },
    {
      id: 'user_80',
      username: 'Isaac',
      avatar: 'https://placekitten.com/50/50?image=80',
    },
    {
      id: 'user_81',
      username: 'Julia',
      avatar: 'https://placekitten.com/50/50?image=81',
    },
    {
      id: 'user_82',
      username: 'Kevin',
      avatar: 'https://placekitten.com/50/50?image=82',
    },
    {
      id: 'user_83',
      username: 'Laura',
      avatar: 'https://placekitten.com/50/50?image=83',
    },
    {
      id: 'user_84',
      username: 'Mike',
      avatar: 'https://placekitten.com/50/50?image=84',
    },
    {
      id: 'user_85',
      username: 'Nina',
      avatar: 'https://placekitten.com/50/50?image=85',
    },
    {
      id: 'user_86',
      username: 'Oscar',
      avatar: 'https://placekitten.com/50/50?image=86',
    },
    {
      id: 'user_87',
      username: 'Pam',
      avatar: 'https://placekitten.com/50/50?image=87',
    },
    {
      id: 'user_88',
      username: 'Quincy',
      avatar: 'https://placekitten.com/50/50?image=88',
    },
    {
      id: 'user_89',
      username: 'Rose',
      avatar: 'https://placekitten.com/50/50?image=89',
    },
    {
      id: 'user_90',
      username: 'Sam',
      avatar: 'https://placekitten.com/50/50?image=90',
    },
    {
      id: 'user_91',
      username: 'Tara',
      avatar: 'https://placekitten.com/50/50?image=91',
    },
    {
      id: 'user_92',
      username: 'Uma',
      avatar: 'https://placekitten.com/50/50?image=92',
    },
    {
      id: 'user_93',
      username: 'Victor',
      avatar: 'https://placekitten.com/50/50?image=93',
    },
    {
      id: 'user_94',
      username: 'Wendy',
      avatar: 'https://placekitten.com/50/50?image=94',
    },
    {
      id: 'user_95',
      username: 'Xander',
      avatar: 'https://placekitten.com/50/50?image=95',
    },
    {
      id: 'user_96',
      username: 'Yara',
      avatar: 'https://placekitten.com/50/50?image=96',
    },
    {
      id: 'user_97',
      username: 'Zeke',
      avatar: 'https://placekitten.com/50/50?image=97',
    },
    {
      id: 'user_98',
      username: 'Ava',
      avatar: 'https://placekitten.com/50/50?image=98',
    },
    {
      id: 'user_99',
      username: 'Blake',
      avatar: 'https://placekitten.com/50/50?image=99',
    },
    {
      id: 'user_100',
      username: 'Chloe',
      avatar: 'https://placekitten.com/50/50?image=100',
    },
  ],
};
