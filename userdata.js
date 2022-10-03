import { AiFillGithub, AiFillInstagram, AiFillYoutube } from "react-icons/ai";
import { BsFacebook, BsTelegram, BsReddit, BsLinkedin } from "react-icons/bs";
import { SiBinance, SiLitecoin } from "react-icons/si";
import { FaBitcoin, FaTiktok, FaMonero, FaEthereum } from "react-icons/fa";
import { RiExchangeFundsFill } from "react-icons/ri";
import { MdDashboardCustomize, MdBarChart, MdSettings } from "react-icons/md";
import { BiTransferAlt } from "react-icons/bi";
import { FcNeutralTrading } from "react-icons/fc";
import { GiWallet } from "react-icons/gi";

export const portfolioData = [
  {
    id: 1,
    text: "Dive into the world of NFTs",
    contents:
      " Open rare Mystery Boxes, explore IGOs, Fan Tokens, and more with Binance NFT.",
    img_src: "./image/pix2.png",
  },
  {
    id: 2,
    text: "Grow your business with Binance Pay",
    contents:
      " Reach more customers as you pay and get paid in crypto with our borderless payment technology on Binance Pay & Binance Marketplace.",
    img_src: "./image/pix3.png",
  },
  {
    id: 3,
    text: "Binance Earn",
    contents: "Hold your crypto funds and start earning.",
    img_src: "./image/pix4.png",
  },
];

export const logos = [
  {
    id: 1,
    logos_src: (
      <span>
        <SiBinance />
      </span>
    ),
  },
  {
    id: 2,
    logos_src: (
      <span>
        <FaBitcoin />
      </span>
    ),
  },
  {
    id: 3,
    logos_src: (
      <span>
        <AiFillGithub />
      </span>
    ),
  },
  {
    id: 4,
    logos_src: (
      <span>
        <BsTelegram />
      </span>
    ),
  },
  {
    id: 5,
    logos_src: (
      <span>
        <AiFillInstagram />
      </span>
    ),
  },
  {
    id: 6,
    logos_src: (
      <span>
        <FaTiktok />
      </span>
    ),
  },
  {
    id: 7,
    logos_src: (
      <span>
        <BsReddit />
      </span>
    ),
  },
  {
    id: 8,
    logos_src: (
      <span>
        <RiExchangeFundsFill />
      </span>
    ),
  },
  {
    id: 9,
    logos_src: (
      <span>
        <BsLinkedin />
      </span>
    ),
  },
  {
    id: 10,
    logos_src: (
      <span>
        <AiFillYoutube />
      </span>
    ),
  },
];

export const teamData = [
  {
    id: "1",
    img: "./image/pix4.png",
    name: "Zobs Daniel Mark",
    info: "Lorem ipsu qui facere ad impedit nemo nam excepturi ducimus aliquam!",
    organization: "TECH CREEK",
    userName: "Food Hunter",
  },
  {
    id: "2",
    img: "./image/pix4.png",
    name: "Zobs Daniel Mark",
    info: "Lorem ipsu qui facere ad impedit nemo nam excepturi ducimus aliquam!",
    organization: "TECH CREEK",
    userName: "Food Hunter",
  },
  {
    id: "3",
    img: "./image/pix4.png",
    name: "Zobs Daniel Mark",
    info: "Lorem ipsu qui facere ad impedit nemo nam excepturi ducimus aliquam!",
    organization: "TECH CREEK",
    userName: "Food Hunter",
  },
  {
    id: "4",
    img: "./image/pix4.png",
    name: "Zobs Daniel Mark",
    info: "Lorem ipsu qui facere ad impedit nemo nam excepturi ducimus aliquam!",
    organization: "TECH CREEK",
    userName: "Food Hunter",
  },
  {
    id: "5",
    img: "./image/pix4.png",
    name: "Zobs Daniel Mark",
    info: "Lorem ipsu qui facere ad impedit nemo nam excepturi ducimus aliquam!",
    organization: "TECH CREEK",
    userName: "Food Hunter",
  },
  {
    id: "6",
    img: "./image/pix4.png",
    name: "Zobs Daniel Mark",
    info: "Lorem ipsu qui facere ad impedit nemo nam excepturi ducimus aliquam!",
    organization: "TECH CREEK",
    userName: "Food Hunter",
  },
  {
    id: "7",
    img: "./image/pix4.png",
    name: "Zobs Daniel Mark",
    info: "Lorem ipsu qui facere ad impedit nemo nam excepturi ducimus aliquam!",
    organization: "TECH CREEK",
    userName: "Food Hunter",
  },
];

export const walletData = [
  {
    id: 1,

    coin_name: "Binance BNB",
    last_price: "$ 28.41 ",
    change_price: "-0.14%",
    nav_logo: <FaBitcoin />,
    markets_icon: "logo1",
  },
  {
    id: 2,

    coin_name: "BTC Bitcoin",
    last_price: "$ 11,295.29",
    change_price: "+2.09%",
    nav_logo: <FaBitcoin />,
    markets_icon: "logo1",
  },
  {
    id: 3,

    coin_name: "ETH Ethereum",
    last_price: "$ 371.73",
    change_price: "+4.87",
    nav_logo: <FaBitcoin />,
    markets_icon: "logo1",
  },
];

export const dashCoinImgSec = [
  {
    id: 1,
    headText: "Ethereum",
    decimal_no: "86.4",
    amount: "$7864.24",
    img_market: "./image/chart.png",
    coin_logo: "./image/pixetherum6.png",
    percentage_text: "04.86%",
  },
  {
    id: 2,
    headText: "Monero",
    decimal_no: "86.4",
    amount: "$7864.24",
    img_market: "./image/chart.png",
    coin_logo: "./image/montero.png",
    percentage_text: "04.86%",
  },
  {
    id: 3,
    headText: "Bitcoin",
    decimal_no: "86.4",
    amount: "$7864.24",
    img_market: "./image/chart.png",
    coin_logo: "./image/opengraph.png",
    percentage_text: "12.68% ",
  },
];

export const marketCapData = [
  {
    id: 1,
    coinIcon: "./image/opengraph.png",
    coinName: "BTC",
    USD: "$ 4,604.00 USD",
    percentageNo: "+01.48%",
    plusIcon: "./image/plusimg1.png",
  },
  {
    id: 2,
    coinIcon: "./image/pixetherum6.png",
    coinName: "ETH",
    USD: "$ 2,348.62 USD ",
    percentageNo: "+03.48%",
    plusIcon: "./image/plusimg1.png",
  },
  {
    id: 3,
    coinIcon: "./image/xpr1.png",
    coinName: "XRP",
    USD: "$ 0.34621 USD",
    percentageNo: "+01.48%",
    plusIcon: "./image/plusimg1.png",
  },
];

export const DashBoardData = [
  {
    id: 1,
    navLogo: <MdDashboardCustomize />,
    navPage: "Dashboard",
  },
  {
    id: 1,

    navLogo: <FcNeutralTrading />,
    navPage: "Trade",
  },
  {
    id: 1,
    navLogo: <GiWallet />,
    navPage: "Wallet",
  },
  {
    id: 1,
    navLogo: <BiTransferAlt />,
    navPage: "Transactions",
  },
  {
    id: 1,
    navLogo: <MdBarChart />,
    navPage: "Analytics",
  },
  {
    id: 1,
    navLogo: <MdSettings />,
    navPage: "Settings",
  },
];

export const dashTopData = [
  {
    id: 1,
    top_sec: "Your Balance",
    bottom_sec: "$16,756.00",
  },
  {
    id: 2,
    top_sec: "Coins",
    bottom_logo1: <FaBitcoin />,
    bottom_logo2: <FaEthereum />,
    bottom_logo3: <FaMonero />,
    bottom_logo4: <SiLitecoin />,
    bottom_logoText: "+02 More",
  },
  {
    id: 3,
    top_sec: "Todays Profits",
    bottom_sec: "+ 14.00",
    bottom_percentage: "05.46%",
  },
  {
    id: 4,
    top_sec: "Overall Profit/Loss",
    bottom_sec: "+ 08.48",
    bottom_percentage: "04.86%",
  },
  {
    id: 5,
    top_sec_btn: "send money",
    bottom_sec_btn: "buy currency",
  },
];
