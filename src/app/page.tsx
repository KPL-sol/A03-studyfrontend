import Banner from '@/components/Banner';
import Card from '@/components/Card';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      {/* ส่วนที่ 1: Banner อยู่บนสุด */}
      <Banner />

      {/* ส่วนที่ 2: Card วางต่อลงมา จัดให้อยู่กึ่งกลาง */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        padding: '40px 20px' 
      }}>
        <Card />
      </div>
    </main>
  );
}