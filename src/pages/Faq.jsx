import Container from "./Shared/Container";
import PageBanner from "./Shared/PageBanner";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

const items = [
  {
    id: "01",
    quest: "What is WeddingWonders?",
    answer:
      "This is an matrimony website. Here you can find and read the biodata of brides and grooms based on district, department and medium of education. ",
  },
  {
    id: "02",
    quest: "Is there any fee to submit biodata on the website?",
    answer: "We are not taking any money from anyone till now.",
  },
  {
    id: "03",
    quest:
      "I can't meet these requirements, can I submit my resume on your website?",
    answer:
      "No you can't. If you can't fulfill the minimum conditions then we won't accept your biodata. We will only work for selective audience.",
  },
  {
    id: "04",
    quest:
      "I can meet your requirements now how can I submit my resume to your website?",
    answer:
      "Video tutorial on how to submit biodata (must watch the full video otherwise there is a possibility of error.",
  },
  {
    id: "05",
    quest: "I have published my biodata but why is biodata not approved?",
    answer:
      "Video tutorial on how to submit biodata (must watch the full video otherwise there is a possibility of error.",
  },
  {
    id: "06",
    quest:
      "My guardian does not agree to my marriage or I am not allowed to upload biodata on website, can I submit biodata?",
    answer:
      "can not Irrespective of whether you are the spouse, you must get your parent's permission to upload the biodata on the website. Also we cannot approve biodata.",
  },
  {
    id: "07",
    quest:
      "My studies are ongoing ie I am a student and I don't have any income yet, can I upload my biodata on the website??",
    answer:
      "Yes, you can upload. But as per our main conditions you must have your parent's permission to create biodata..",
  },
];

// Demo styles, see 'Styles' section below for some notes on use.
import "react-accessible-accordion/dist/fancy-example.css";

const Faq = () => {
  return (
    <div>
      <PageBanner heading="Usual Questions" />
      <Container>
        <div className="my-14">
          <Accordion allowZeroExpanded>
            {items.map((item) => (
              <AccordionItem key={item.id}>
                <AccordionItemHeading>
                  <AccordionItemButton>{item.quest}</AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>{item.answer}</AccordionItemPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Container>
    </div>
  );
};

export default Faq;
