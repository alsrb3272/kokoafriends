export const bestItem = [
    {
        id: 1,
        name: "디지털 무빙시계_라이언&춘식이",
        title: "시간 변화에 따라\n라이언 춘식이가 짠",
        bannerImg: "HomeBanner01.jpg",
        contents: "귀여운 아트웍이 매력적인\n디지털 무빙 시계를 소개합니다",
        price: 39000,
        like: 0,
        view: 0,
        comment: "시간 변화에 따라\n라이언 춘식이가 짠!",
        slideImg: [
            "digital_clock_lion-choonsik_01.jpg",
            "digital_clock_lion-choonsik_02.jpg",
            "digital_clock_lion-choonsik_03.jpg",
        ],
        mainTopImg: [
            "digital_clock_lion-choonsik_04.jpg",
            "digital_clock_lion-choonsik_05.jpg",
        ],
        mainMidImg: [
            "digital_clock_lion-choonsik_06.jpg",
            "digital_clock_lion-choonsik_07.jpg",
        ],
        mainBottomImg: [
            "digital_clock_lion-choonsik_08.jpg",
            "digital_clock_lion-choonsik_09.jpg",
        ],
    },
    {
        id: 2,
        name: "스탠드형칫솔살균기_머그리틀라이언",
        title: "내 칫솔을 깨끗하게",
        bannerImg: "HomeBanner02.jpg",
        contents: " 스탠드형 칫솔살균기로\n구강 건강 챙겨봐요",
        price: 29000,
        like: 0,
        view: 0,
        comment: "프렌즈 칫솔 지킴이\n청결하게 양치해요",
        slideImg: [
            "mug_little_lion_01.jpg",
            "mug_little_lion_02.jpg",
            "mug_little_lion_03.jpg",
            "mug_little_lion_04.jpg",
            "mug_little_lion_05.jpg",
        ],
        mainTopImg: ["mug_little_lion_06.jpg"],
        mainMidImg: ["mug_little_lion_07.jpg", "best_mug_little_lion_08.jpg"],
        mainBottomImg: ["mug_little_lion_09.jpg"],
    },
    {
        id: 3,
        name: "자전거램프_라이언",
        title: "자전거 타기 좋은 날",
        bannerImg: "HomeBanner03.jpg",
        contents: "핸들 위 달랑달랑\n라이언 램프가 반짝!",
        price: 15000,
        like: 0,
        view: 0,
        comment: "귀여움과 안전을 책임져줄\n나만의 라이딩 메이트",
        slideImg: [
            "bike_lamp_lion_01.jpg",
            "bike_lamp_lion_02.jpg",
            "bike_lamp_lion_03.jpg",
            "bike_lamp_lion_04.jpg",
            "bike_lamp_lion_05.jpg",
            "bike_lamp_lion_06.jpg",
        ],
        mainTopImg: ["bike_lamp_lion_07.jpg"],
        mainMidImg: ["bike_lamp_lion_08.jpg", "best_bike_lamp_lion_09.jpg"],
        mainBottomImg: ["bike_lamp_lion_10.jpg"],
    },
    {
        id: 4,
        name: "모션감지 센서등(건전지타입)_라이언",
        title: "근처에만 가도 반짝",
        bannerImg: "HomeBanner04.jpg",
        contents: "내 공간을 아늑하게 밝혀줄\n라이언과 춘식이 센서등",
        price: 32000,
        like: 0,
        view: 0,
        comment: "근처를 지나가면\n라이언 달님이 반짝",
        slideImg: [
            "motion_sensor_lion_01.jpg",
            "motion_sensor_lion_02.jpg",
            "motion_sensor_lion_03.jpg",
            "motion_sensor_lion_04.jpg",
        ],
        mainTopImg: ["motion_sensor_lion_05.jpg"],
        mainMidImg: ["motion_sensor_lion_06.jpg", "motion_sensor_lion_07.jpg"],
        mainBottomImg: ["motion_sensor_lion_08.jpg"],
    },
    {
        id: 5,
        name: "춘식이 차량용 목쿠션",
        title: "춘식이의 첫 드라이브",
        bannerImg: "HomeBanner04.jpg",
        contents: "답답한 집콕에 지쳐있다면\n춘식이와 함께 기분 좋은 드라이브를 떠나보세요.",
        price: 12000,
        like: 0,
        view: 0,
        comment: "춘식이의 첫 드라이브",
        slideImg: [
            "cars_cushion_choonsik_01.jpg",
            "cars_cushion_choonsik_02.jpg",
            "cars_cushion_choonsik_03.jpg",
        ],
        mainTopImg: ["cars_cushion_choonsik_04.jpg"],
        mainMidImg: ["cars_cushion_choonsik_05.jpg"],
        mainBottomImg: ["cars_cushion_choonsik_06.jpg"],
    },
    {
        id: 6,
        name: "[킨토]투고텀블러 360ml_라이언&춘식이",
        title: "라이언&춘식이와 티타임",
        bannerImg: "HomeBanner04.jpg",
        contents: "답답한 업무에 지쳐있다면\n카카오프렌즈와 함께 차한잔.",
        price: 45000,
        like: 0,
        view: 0,
        comment: "휴식이 필요할 땐\n프렌즈와 칠랙스",
        slideImg: [
            "togo_tumbler_lion-choonsik_01.jpg",
            "togo_tumbler_lion-choonsik_02.jpg",
            "togo_tumbler_lion-choonsik_03.jpg",
            "togo_tumbler_lion-choonsik_04.jpg",
        ],
        mainTopImg: ["togo_tumbler_lion-choonsik_05.jpg"],
        mainMidImg: ["togo_tumbler_lion-choonsik_06.jpg"],
        mainBottomImg: ["togo_tumbler_lion-choonsik_07.jpg"],
    },
];
export function getBestitemId(id) {
    const selectedBestItem = bestItem.filter((ele) => ele.id === id);
    return selectedBestItem[0];
}
