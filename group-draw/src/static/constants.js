const teams = [
    {
        name: '벨기에',
        code: 'bel',
        resource: '',
        continent: 'uefa'
    },
    {
        name: '프랑스',
        code: 'fra',
        resource: '',
        continent: 'uefa'
    },
    {
        name: '잉글랜드',
        code: 'eng',
        resource: '',
        continent: 'uefa'
    },
    {
        name: '포르투갈',
        code: 'por',
        resource: '',
        continent: 'uefa'
    },
    {
        name: '네덜란드',
        code: 'ned',
        resource: '',
        continent: 'uefa'
    },
    {
        name: '스페인',
        code: 'esp',
        resource: '',
        continent: 'uefa'
    },
    {
        name: '덴마크',
        code: 'den',
        resource: '',
        continent: 'uefa'
    },
    {
        name: '독일',
        code: 'ger',
        resource: '',
        continent: 'uefa'
    },
    {
        name: '스위스',
        code: 'sui',
        resource: '',
        continent: 'uefa'
    },
    {
        name: '이탈리아',
        code: 'ita',
        resource: '',
        continent: 'uefa'
    },
    {
        name: '크로아티아',
        code: 'cro',
        resource: '',
        continent: 'uefa'
    },
    {
        name: '웨일즈',
        code: 'wal',
        resource: '',
        continent: 'uefa'
    },
    {
        name: '스웨덴',
        code: 'swe',
        resource: '',
        continent: 'uefa'
    },
    {
        name: '세르비아',
        code: 'srb',
        resource: '',
        continent: 'uefa'
    },
    {
        name: '폴란드',
        code: 'pol',
        resource: '',
        continent: 'uefa'
    },
    {
        name: '우크라이나',
        code: 'ukr',
        resource: '',
        continent: 'uefa'
    },
    {
        name: '체코',
        code: 'cze',
        resource: '',
        continent: 'uefa'
    },
    {
        name: '오스트리아',
        code: 'aut',
        resource: '',
        continent: 'uefa'
    },
    {
        name: '러시아',
        code: 'rus',
        resource: '',
        continent: 'uefa'
    },
    {
        name: '스코틀랜드',
        code: 'sco',
        resource: '',
        continent: 'uefa'
    },
    {
        name: '헝가리',
        code: 'hun',
        resource: '',
        continent: 'uefa'
    },
    {
        name: '노르웨이',
        code: 'nor',
        resource: '',
        continent: 'uefa'
    },
    {
        name: '터키',
        code: 'tur',
        resource: '',
        continent: 'uefa'
    },
    {
        name: '슬로바키아',
        code: 'svk',
        resource: '',
        continent: 'uefa'
    },
    {
        name: '아일랜드',
        code: 'irl',
        resource: '',
        continent: 'uefa'
    },
    {
        name: '대한민국',
        code: 'kor',
        resource: '',
        continent: 'afc'
    },
    {
        name: '이란',
        code: 'irn',
        resource: '',
        continent: 'afc'
    },
    {
        name: '호주',
        code: 'aus',
        resource: '',
        continent: 'afc'
    },
    {
        name: '일본',
        code: 'jpn',
        resource: '',
        continent: 'afc'
    },
    {
        name: '사우디아라비아',
        code: 'ksa',
        resource: '',
        continent: 'afc'
    },
    {
        name: '카타르',
        code: 'qat',
        resource: '',
        continent: 'afc'
    },
    {
        name: 'UAE',
        code: 'uae',
        resource: '',
        continent: 'afc'
    },
    {
        name: '이라크',
        code: 'irq',
        resource: '',
        continent: 'afc'
    },
    {
        name: '오만',
        code: 'oma',
        resource: '',
        continent: 'afc'
    },
    {
        name: '중국',
        code: 'chn',
        resource: '',
        continent: 'afc'
    },
    {
        name: '우즈베키스탄',
        code: 'uzb',
        resource: '',
        continent: 'afc'
    },
    {
        name: '시리아',
        code: 'syr',
        resource: '',
        continent: 'afc'
    },
    {
        name: '바레인',
        code: 'bhr',
        resource: '',
        continent: 'afc'
    },
    {
        name: '아르헨티나',
        code: 'arg',
        resource: '',
        continent: 'conmebol'
    },
    {
        name: '브라질',
        code: 'bra',
        resource: '',
        continent: 'conmebol'
    },
    {
        name: '우루과이',
        code: 'uru',
        resource: '',
        continent: 'conmebol'
    },
    {
        name: '콜롬비아',
        code: 'col',
        resource: '',
        continent: 'conmebol'
    },
    {
        name: '페루',
        code: 'per',
        resource: '',
        continent: 'conmebol'
    },
    {
        name: '칠레',
        code: 'chi',
        resource: '',
        continent: 'conmebol'
    },
    {
        name: '에콰도르',
        code: 'egu',
        resource: '',
        continent: 'conmebol'
    },
    {
        name: '파라과이',
        code: 'par',
        resource: '',
        continent: 'conmebol'
    },
    {
        name: '베네수엘라',
        code: 'ven',
        resource: '',
        continent: 'conmebol'
    },
    {
        name: '볼리비아',
        code: 'bol',
        resource: '',
        continent: 'conmebol'
    },
    {
        name: '미국',
        code: 'usa',
        resource: '',
        continent: 'concacaf'
    },
    {
        name: '멕시코',
        code: 'mex',
        resource: '',
        continent: 'concacaf'
    },
    {
        name: '코스타리카',
        code: 'crc',
        resource: '',
        continent: 'concacaf'
    },
    {
        name: '캐나다',
        code: 'can',
        resource: '',
        continent: 'concacaf'
    },
    {
        name: '파나마',
        code: 'pan',
        resource: '',
        continent: 'concacaf'
    },
    {
        name: '자메이카',
        code: 'jam',
        resource: '',
        continent: 'concacaf'
    },
    {
        name: '엘살바도르',
        code: 'slv',
        resource: '',
        continent: 'concacaf'
    },
    {
        name: '온두라스',
        code: 'hon',
        resource: '',
        continent: 'concacaf'
    },
    {
        name: '남아프리카공화국',
        code: 'rsa',
        resource: '',
        continent: 'caf'
    },
    {
        name: '가나',
        code: 'gha',
        resource: '',
        continent: 'caf'
    },
    {
        name: '세네갈',
        code: 'sen',
        resource: '',
        continent: 'caf'
    },
    {
        name: '모로코',
        code: 'mar',
        resource: '',
        continent: 'caf'
    },
    {
        name: '나이지리아',
        code: 'nga',
        resource: '',
        continent: 'caf'
    },
    {
        name: '이집트',
        code: 'egy',
        resource: '',
        continent: 'caf'
    },
    {
        name: '튀니지',
        code: 'tun',
        resource: '',
        continent: 'caf'
    },
    {
        name: '카메룬',
        code: 'cmr',
        resource: '',
        continent: 'caf'
    },
    {
        name: '알제리',
        code: 'alg',
        resource: '',
        continent: 'caf'
    },
    {
        name: '말리',
        code: 'mli',
        resource: '',
        continent: 'caf'
    },
    {
        name: '코트디부아르',
        code: 'civ',
        resource: '',
        continent: 'caf'
    },
    {
        name: '부르키나 파소',
        code: 'bfa',
        resource: '',
        continent: 'caf'
    },
    {
        name: '기니',
        code: 'gui',
        resource: '',
        continent: 'caf'
    },
    {
        name: '케냐',
        code: 'ken',
        resource: '',
        continent: 'caf'
    },
    {
        name: '콩고민주공화국',
        code: 'cgo',
        resource: '',
        continent: 'caf'
    },
    {
        name: '토고',
        code: 'tog',
        resource: '',
        continent: 'caf'
    },
    {
        name: '앙골라',
        code: 'ang',
        resource: '',
        continent: 'caf'
    },
    {
        name: '뉴질랜드',
        code: 'nzl',
        resource: '',
        continent: 'ofc'
    },
    {
        name: '솔로몬제도',
        code: 'sol',
        resource: '',
        continent: 'ofc'
    }
];

const pot = [
    {
        name: '1',
        code: 'first'
    },
    {
        name: '2',
        code: 'second'
    },
    {
        name: '3',
        code: 'third'
    },
    {
        name: '4',
        code: 'fourth'
    }
];

const limited = {
    uefa: 13,
    conmebol: 5,
    caf: 5,
    afc: 4,
    concacaf: 4,
    ofc: 1
};

const continent = [
    {
        name: '유럽',
        code: 'uefa'
    },
    {
        name: '아시아',
        code: 'afc'
    },
    {
        name: '남아메리카',
        code: 'conmebol'
    },
    {
        name: '북아메리카',
        code: 'concacaf'
    },
    {
        name: '아프리카',
        code: 'caf'
    },
    {
        name: '오세아니아',
        code: 'ofc'
    }
];

export { teams, pot, continent, limited };
