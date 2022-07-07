import MainJournalPage from "../mainJournalPage/MainJournalPage";
import Journals from "../journals/Journals";
import styles from "./Journal.module.css";

const Journal = () => {
  const { container, flex } = styles;
  return (
    <div className={`${container} ${flex}`}>
      <Journals />
      <MainJournalPage />
    </div>
  );
};

export default Journal;
