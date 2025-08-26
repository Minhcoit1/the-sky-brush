import styles from "./card.module.css"
import Image from "next/image"
import Link from "next/link"

const Card = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <Image src="/p1.jpeg" alt="" fill className={styles.image}/>
            </div>
            <div className={styles.textContainer}>
                <div className={styles.detail}>
                    <span className={styles.date}>28.08.2025</span>
                    <span className={styles.category}>IT</span>
                </div>
                <Link href="/" className={styles.title}>
                    <h1>Làm sao để chọn đúng ngành nghề</h1>
                </Link>
                
                <p>Ông cha ta ngày xưa ngã xuống để cho ngày sau đời ta đổi lấy 
                    hoà bình. Giữa khói binh, ai cũng nguyện lòng hy sinh.
                    Xin tri ân những người chiến sĩ quên đi niềm riêng quên đi cả bản thân mình.
                    Cuộn cháy trong lòng, 1 dòng máu nóng dòng máu Lạc Hồng.
                </p>
                <Link href="/">Đọc thêm</Link>
            </div>
        </div>
    );
};

export default Card;