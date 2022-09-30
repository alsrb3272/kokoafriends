import styled from "styled-components";
import {MdLogin, MdManageAccounts, MdOutlineFavoriteBorder, MdOutlineSearch, MdShoppingCart} from "react-icons/md";
import {Link, Outlet, useLocation, useMatch} from "react-router-dom";
import {KAKAO_AUTH_URL} from "../auth/OAuth";
import { gql, useQuery } from "@apollo/client";
import { BestItemObj } from "../interface/dataType";

const BEST_ITEM = gql`
  query {
    bestItem {
      id
      title
      bannerImg
      contents
    }
  }
`;
const Header = styled.div`
  width: 100%;
  height: 50px;
  padding: 0.8rem 0.5rem;
  border-bottom: 2px solid ${(props) => props.theme.accentColor};
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const Logo = styled.div`
  width: 180px;
  height: 31px;
  line-height: 31px;
  display: flex;
  justify-content: center;
  background-color: ${(props) => props.theme.accentColor};
  color: #fff;
  border-radius: 10px;
  text-align: center;
`;
const GnbUl = styled.ul`
  width: 20%;
  display: flex;
`;
const GnbLi = styled.li<{ isActive: boolean }>`
  width: 100px;
  height: 72.6px;
  display: flex;
  margin-right: 20px;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: ${(props) =>
    props.isActive ? props.theme.accentColor : props.theme.textColor};
  font-size: ${(props) => (props.isActive ? "1.2rem" : "1.1rem")};
  font-weight: ${(props) => (props.isActive ? "bold" : "600")};
  border-bottom: ${(props) =>
    props.isActive ? "4px solid" + props.theme.accentColor : "none"};
`;
const UtilUl = styled.ul`
  width: 17%;
  display: flex;
  font-size: 2.2rem;
  justify-content: space-between;
  .util-icon {
    &:hover {
      transform: scale(120%);
    }
  }
`;
const Main = styled.div`
  width: 100%;
  height: auto;
`;
const Banner = styled.div`
  width: 50%;
  height: auto;
  margin: 1.5rem auto;
`;
const BannerImgContentsArea = styled(Link)`
  width: 100%;
  height: 20%;
  position: relative;
`;
const BannerImg = styled.img`
  width: 100%;
  height: 40%;
  margin-bottom: 1rem;
  border-radius: 10px;
  position: relative;
`;
const ImgText = styled.div`
  width: 100%;
  height: auto;
  padding: 5.1rem 1.3rem;
  position: absolute;
  bottom: 0;
  left: 0;
`;
const Title = styled.h1`
  width: 100%;
  height: auto;
  font-size: 2rem;
  font-weight: bold;
  color: ${(props) => props.theme.bgColor};
`;
const Contents = styled.p`
  width: 100%;
  height: auto;
  font-size: 1rem;
  color: ${(props) => props.theme.bgColor};
  font-weight: 500;
  margin-top: 15px;
`;

function Home() {
  const state = useLocation();
  const homeMatch = useMatch("/");
  const contentsMatch = useMatch("/contents");
  const bestMatch = useMatch("/best");
  const { data } = useQuery<BestItemObj>(BEST_ITEM);
  let mainBannerItem = data?.bestItem.filter((ele) => ele.id < 5);
  return (
    <>
      <Header>
        <Link to="/">
          <Logo>KOKOA FRIENDS</Logo>
        </Link>
        <GnbUl>
          <Link to="/">
            <GnbLi isActive={homeMatch !== null}>홈</GnbLi>
          </Link>
          <Link to="/best">
            <GnbLi isActive={bestMatch !== null}>베스트 </GnbLi>
          </Link>
          <Link to="/contents">
            <GnbLi isActive={contentsMatch !== null}>콘텐츠 </GnbLi>
          </Link>
        </GnbUl>
        <UtilUl>
          <a href={KAKAO_AUTH_URL}>
            <MdLogin className="util-icon" title="로그인" />
          </a>
          <MdManageAccounts className="util-icon" title="마이페이지" />
          <MdShoppingCart className="util-icon" title="장바구니" />
          <MdOutlineFavoriteBorder className="util-icon" title="찜한상품" />
          <Link to="/search">
            <MdOutlineSearch className="util-icon" title="검색" />
          </Link>
        </UtilUl>
      </Header>
      {state.pathname === "/" ? (
        <Main>
          <Banner>
            {mainBannerItem?.map((ele) => (
              <>
                <BannerImgContentsArea
                  to={`/bestProduct/${ele?.id}`}
                  key={ele?.id}
                >
                  <BannerImg src={`/img/${ele?.bannerImg}`} alt={ele?.title} />
                  <ImgText>
                    <Title>{ele?.title}</Title>
                    <Contents>{ele?.contents}</Contents>
                  </ImgText>
                </BannerImgContentsArea>
              </>
            ))}
          </Banner>
        </Main>
      ) : (
        <Outlet />
      )}
    </>
  );
}

export default Home;