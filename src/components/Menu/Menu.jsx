import React from "react"
import styles from "./menu.module.css"
import Link from "next/link"
import Image from "next/image"

const Menu = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.subtitle}>{"What's hot"}</h2>
            <h1 className={styles.title}>Phổ biến nhất</h1>
            <div className={styles.items}>
                <Link href="/" className={styles.item}>
                    <div className={styles.imageContainer}>
                        <Image src="/p1.jpeg" alt="" fill className={styles.image}/>
                    </div>
                    <div className={styles.textContainer}>
                        <span className={`${styles.category} ${styles.travel}`}>Travel</span>
                        <h3>
                            Vì sao diễu binh, diễu hành kỷ niệm 80 năm Quốc Khánh được gọi là nhiệm vụ A80? Chữ A là viết tắt của từ gì?
                            Trong thời gian qua, người dân đã quen với cái tên A80. Đây là nhiệm vụ tập luyện, tham gia buổi lễ diễu binh, diễu hành cấp quốc gia với quy mô đặc biệt để kỷ niệm 80 năm Quốc khánh.
                            Sự kiện chính thức sẽ diễn ra vào sáng ngày 2/9/2025 tại Quảng trường Ba Đình, Hà Nội.
                            Tên gọi A80 mang ý nghĩa như sau: Chữ A là viết tắt của từ Anniversary (kỷ niệm) và 80 là dấu mốc tròn 80 năm ngày thành lập đất nước.
                            Tương tự, trước đó, Lễ diễu binh, diễu hành kỷ niệm 50 năm Giải phóng miền Nam, thống nhất đất nước (30/4/1975 - 30/4/2025) cũng được gọi là nhiệm vụ A50. 
                            Trong đó, A là viết tắt của anniversary và 50 dùng để chỉ dấu mốc 50 năm Giải phóng miền Nam, thống nhất đất nước.
                            Nói về ý nghĩa của Lễ diễu binh, diễu hành kỷ niệm 80 năm Quốc khánh nước Cộng hòa xã hội chủ nghĩa Việt Nam, đây là sự kiện mang tầm quốc gia, khẳng định giá trị lịch sử to lớn, tầm vóc vĩ đại của Cách mạng tháng Tám, sự ra đời của đất nước.
                            Ngoài ra, sự kiện này này cũng là cơ hội để Quân đội Nhân dân, Dân quân tự vệ và Công an Nhân dân thể hiện sự phát triển vững mạnh dưới sự lãnh đạo sáng suốt của Đảng trong 80 năm qua.
                        </h3>
                        <div className={styles.detail}>
                            <span className={styles.username}>Bui Minh</span>
                            <span className={styles.date}>06.09.2025</span>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Menu;