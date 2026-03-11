import styles from './banner.module.css';

export default function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.bannerText}>
                <h1>where every event finds its venue</h1>
                <p>สัมผัสประสบการณ์การจัดงานที่เหนือระดับ ด้วยสถานที่ที่ตอบโจทย์ทุกความต้องการของคุณ</p>
            </div>
        </div>
    );
}