export let comments = [
    {
        id: 1,
        contents_id: 1,
        kakaoId: "1234567895",
        comment: "귀여워요~~",
        date: "2022.10.01",
    },
    {
        id: 2,
        contents_id: 1,
        kakaoId: "1234567893",
        comment: "내가 더 귀여워요",
        date: "2022.10.01",
    },
    {
        id: 3,
        contents_id: 2,
        kakaoId: "1234567894",
        comment: "당장 사야겠다!!",
        date: "2022.09.21",
    },
    {
        id: 4,
        contents_id: 2,
        kakaoId: "1234567893",
        comment: "이건 귀엽네",
        date: "2022.09.21",
    },
    {
        id: 5,
        contents_id: 2,
        kakaoId: "1234567896",
        comment: "갖고싶은 아이템이네요~~",
        date: "2022.09.22",
    },
    {
        id: 6,
        contents_id: 3,
        kakaoId: "1234567892",
        comment: "사야겠다",
        date: "2022.09.14",
    },
    {
        id: 7,
        contents_id: 3,
        kakaoId: "1234567890",
        comment: "정말 귀여운 옷이네요",
        date: "2022.09.14",
    },
    {
        id: 8,
        contents_id: 3,
        kakaoId: "1234567891",
        comment: "갖고싶은 아이템이네요~~",
        date: "2022.09.18",
    },
    {
        id: 9,
        contents_id: 3,
        kakaoId: "1234567893",
        comment: "내가 더 찰떡인데",
        date: "2022.09.21",
    },
];
export function deleteId(id) {
    const deletedComment = comments.filter((comment) => comment.id !== id);
    if (comments.length !== deletedComment.length) {
        comments = deletedComment;
    }
}
