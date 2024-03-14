interface StylePoint {
  id: number;
}

interface StylePointDetails {
  stylepoint: string;
  styledetail: string;
  details: string[];
}

const StylePointDetail = ({ id }: StylePoint): StylePointDetails | null => {
  switch (id) {
    case 1:
      return {
        stylepoint: '유니크',
        styledetail: '변화에 민감하고 개성을 추구하는',
        details: [
          '유니크 포인트는 개개인의 다양성과 시대에 따라 변화하는 스타일을 반영하여 평범하지 않은 독보적이고 감각적인 무드를 표현하는 스타일 유형입니다.',
          '이 유형의 사람들은 패션을 통해 자신만의 독특한 개성과 창조성을 표현하는 것을 중요하게 생각합니다. 이는 패션을 예술의 한 분야로 보는 관점에서 비롯된 문화적 흐름이며, 표현의 자유를 중시하는 현대 사회의 가치관을 반영합니다.',
          '유니크 스타일을 선호하는 사람들은 대중적인 트렌드보다는 자신만의 스타일을 만들어가는 것을 중요시하며, 이를 위해 독특한 실루엣, 눈에 띄는 액세서리 등을 활용합니다.',
          '이들은 자신만의 스타일을 만들어 내는 데 있어, 예측 불가능한 색상 조합, 눈에 띄는 패턴, 과장된 액세서리, 비대칭적인 디자인 등을 선호합니다.',
          '유니크 스타일은 패션을 통해 자신의 개성을 강조하고, 창의성을 표현하는 것을 중요시하는 사람들에게 적합합니다. 이 스타일은 자신만의 독특한 패션 센스를 표현하고자 하는 사람들에게 인기가 있습니다.',
        ],
      };
    case 2:
      return {
        stylepoint: '스트릿',
        styledetail: '격식을 갖추지 않고 길거리에서 편하게 입을 수 있는 힙한',
        details: [
          '스트릿 포인트는 국내외에서 대중적으로 가장 많이 보이는 패션 중 하나입니다.',
          '말 그대로 길거리 사람들의 패션을 일컫는 말이기도 하지만 힙합, 보드문화, 올드스쿨 스타일이 가장 주된 스타일이며 도시의 생동감과 자유로움을 표현하는 패션 유형입니다.',
          '대체적으로 스타일리쉬하면서도 편안함을 중요시하는 유형으로, 루즈한 오버사이즈 아이템을 선호하며, 로고 티셔츠, 데님, 스니커즈, 트랙 팬츠 등 캐주얼하면서도 도시적인 아이템을 주로 활용합니다.',
          '이러한 스트릿 포인트는 일상적인 생활에서 뿐만 아니라 음악 페스티벌이나 패션 위크 등에서도 많이 볼 수 있으며, 현대 젊은 세대의 패션 문화를 대표하는 스타일 중 하나입니다.',
        ],
      };

    case 3:
      return {
        stylepoint: '모던',
        styledetail:
          '장식적인 것 없이 깔끔하고 심플하며 직선적인 실루엣을 추구하는',
        details: [
          '모던 포인트는 깔끔한 핏과 실루엣 자체에 신경을 많이 쓰는 유형으로, 불필요한 장식을 배제하고 심플한 컬러를 중심으로 디자인되어 고급스러움과 세련된 이미지를 표현하는 스타일을 선호합니다.',
          '이 스타일은 현대적인 미학을 반영한 패션으로, 기능성과 심플함을 중시합니다. 대표적으로 테일러링 재킷, 슬림한 팬츠, 클래식한 슈즈 등이 이 유형에 해당합니다.',
          '또한, 모던 포인트는 미니멀리즘을 추구하는 경향이 있어, 간결하고 깔끔한 디자인의 아이템을 선호하며 과장된 패턴이나 컬러보다는 중성적인 컬러 팔레트를 선호하는 특징이 있습니다.',
          '이러한 모던 스타일은 비즈니스 캐주얼 또는 스마트 캐주얼 등의 드레스 코드에서 자주 볼 수 있으며, 세련되고 전문적인 이미지를 연출하고자 하는 사람들에게 인기가 있습니다.',
        ],
      };

    case 4:
      return {
        stylepoint: '노멀',
        styledetail:
          '일상적이고 평범한 착장이 무난하지 않도록 센스있는 포인트가 들어간',
        details: [
          '노멀 포인트는 일반적이라는 뜻의 놈(Norm)과 핵심적이라는 뜻의 코어(Core)의 합성어로, ‘평범하고 일반적인 것들이 핵심이 된다.’라는 의미를 가지고 있습니다.',
          '쉽게 말해 ‘평범하지만 센스 있는 스타일’을 가리키는 것입니다.',
          '노멀 포인트는 일상적이고 기본적인 패션 아이템을 세련되게 코디하는 것을 선호합니다. 이는 일상의 편안함과 실용성을 중시하는 동시에, 자신만의 개성을 강조하는 현대 사회의 패션 트렌드를 반영합니다.',
          '보통 편안한 티셔츠, 기본적인 데님 팬츠, 클래식한 스니커즈 등 일반적으로 생각하는 기본 아이템을 활용하지만, 디테일에 센스를 발휘하여 독특하게 스타일링합니다.',
          '예를 들어, 기본 아이템에 눈에 띄는 액세서리를 매치하거나, 독특한 컬러의 아이템을 활용하는 등의 방법으로 자신만의 스타일을 표현합니다.',
          '또한, 노멀 포인트는 트렌드에 크게 구애받지 않고, 자신만의 스타일을 지키면서도 세련되게 연출하는 데 중점을 둡니다. 이 유형은 자신만의 개성을 강조하고, 심플하면서도 세련된 패션을 추구하는 사람들에게 인기가 있습니다.',
        ],
      };

    case 5:
      return {
        stylepoint: '러블리',
        styledetail:
          '사랑스러운 소녀같이 귀엽고 로맨틱 하면서 여성스러운 무드를 강조한',
        details: [
          '러블리 포인트는 여성스러우면서도 사랑스러운 이미지를 표현하는 패션을 선호합니다.',
          '이 유형은 로맨틱하고 부드러운 느낌을 좋아하는 패션 문화를 반영하며, 플라워 프린트, 레이스, 리본 등의 로맨틱한 디테일과 파스텔 톤의 컬러 팔레트를 선호합니다.',
          '또한, 이 유형은 여성스러운 실루엣을 강조하기 위해 플레어 스커트, 프릴 블라우스, 레이스 드레스 등을 활용합니다.',
          '러블리 포인트는 부드러운 소재와 디테일을 선호하며, 이를 통해 여성스러움과 부드러움을 동시에 표현합니다.',
          '액세서리로는 진주 목걸이, 귀여운 브로치, 리본 헤어밴드 등을 활용하여 더욱 사랑스럽고 여성스러운 이미지를 강조합니다.',
          '이 유형은 자신의 부드럽고 여성스러운 면모를 강조하고 싶은 사람들에게 적합하며, 특별한 날이나 낭만적인 데이트 룩에도 자주 활용됩니다.',
        ],
      };

    case 6:
      return {
        stylepoint: '레트로',
        styledetail:
          '1990-2000년대의 감성을 재해석하여 오래된 듯한 멋진 느낌이 드는',
        details: [
          '레트로 포인트는 90년대와 2000년대 초기의 패션 요소를 현대적으로 재해석하여, 그 시대의 특유의 분위기를 살리면서도 현대적인 패션 감각을 유지하는 것을 선호하는 유형입니다.',
          '빈티지한 프린트, 고전적인 실루엣, 레트로한 컬러 등 다양한 방식을 활용하여 고유한 매력을 강조합니다.',
          '또한, 이 유형은 레트로한 컬러 팔레트를 활용하여 과거의 감성을 표현합니다. 이는 브라운, 버건디, 머스타드, 올리브 그린 등의 레트로한 컬러를 활용하여 빈티지한 분위기를 연출합니다.',
          '레트로 포인트는 그 시대의 패션과 문화에 대한 로망을 가진 사람들에게 인기가 있으며, 과거와 현재를 연결하는 독특한 패션 스타일을 추구하는 사람들에게 적합합니다.',
        ],
      };

    case 7:
      return {
        stylepoint: '글램',
        styledetail: '섹시함이 강조되는 화려하고 여성스러운',
        details: [
          '글램 포인트는 글래머러스의 줄임말로 화려함, 부티, 귀티라는 의미로 화려하고 섹시한 이미지를 중심으로 하는 패션을 선호하는 유형입니다.',
          '이 유형은 고급스러운 소재나 화려한 장식, 섹시한 실루엣 등을 활용하여 강렬하고 도발적인 이미지를 표현하는 것을 선호합니다.',
          '이는 패션을 통해 자신의 섹시함과 화려함을 강조하고 싶어하는 사람들에게 인기가 있습니다.',
          '글램 포인트의 대표적인 아이템으로는 시퀸 드레스, 새틴 블라우스, 고급스러운 질감의 퍼 아이템, 화려한 장식이 달린 액세서리 등이 있습니다. 이러한 아이템들은 특별한 날이나 파티 등에서 많이 찾는 스타일로, 화려하면서도 고급스러운 이미지를 연출하며, 섹시한 무드를 강조합니다.',
        ],
      };

    case 8:
      return {
        stylepoint: '액티브',
        styledetail:
          '스포츠웨어와 일상복의 경계를 허물고 활동적인 이미지를 표현하는',
        details: [
          '액티브 포인트는 편안한 스포츠웨어, 실용적인 아웃도어 아이템, 편안한 스니커즈 등을 활용하여 활동적인 라이프스타일을 표현하는 패션 유형입니다.',
          '에슬래저룩이나, 고프코어룩이 이에 포함되며, 기능성을 중시한 디자인에서 건강과 레저를 위한 밝은 색상의 디자인에 이르기까지 활동적인 이미지를 표현한 스타일입니다.',
          '또한, 액티브 포인트는 기능성을 중시하며, 편안하면서도 스타일리시한 룩을 선호합니다. 이는 기능성 패브릭, 레이어드 스타일링, 밝은 컬러의 아이템 등 다양한 방법으로 표현됩니다.',
          '액티브 포인트는 스포츠를 좋아하거나 활동적인 라이프스타일을 가진 사람들에게 인기가 있으며, 일상에서도 편안하면서도 스타일리시하게 보이고 싶은 사람들에게 적합합니다.',
        ],
      };

    default:
      return null;
  }
};

export default StylePointDetail;
