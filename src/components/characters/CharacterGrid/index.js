import styles from './index.module.scss';
import Card from '@/components/characters/CharacterCard';

const Index = ({ characters }) => {
  return (
    <div className={styles.grid}>
      {Array.isArray(characters) &&
        characters.map((image) => <Card key={image.id} image={image} />)}
    </div>
  );
};

export default Index;
