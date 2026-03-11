import Image from 'next/image';
import styles from './card.module.css';

export default function Card() {
    return (
        <div className={styles.card}>
            <div className={styles.cardImage}>
                <Image 
                    src="/img/venue.png" 
                    alt="Venue Image" 
                    width={300} 
                    height={200}
                    className={styles.cardImage}
                />
            </div>
            <div className={styles.cardContent}>
                <h3>Grand Ballroom</h3>
                <p>สถานที่จัดงานเลี้ยงที่หรูหราที่สุด พร้อมสิ่งอำนวยความสะดวกครบครัน</p>
            </div>
        </div>
    );
}