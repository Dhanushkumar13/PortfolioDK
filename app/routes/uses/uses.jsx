import usesBackgroundPlaceholder from '~/assets/uses-background-placeholder.jpg';
import usesBackground from '~/assets/dbz-ui.mp4';
import { Footer } from '~/components/footer';
import { Link } from '~/components/link';
import { List, ListItem } from '~/components/list';
import { Table, TableBody, TableCell, TableHeadCell, TableRow } from '~/components/table';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectSection,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from '~/layouts/project';
import { baseMeta } from '~/utils/meta';
import styles from './uses.module.css';

export const meta = () => {
  return baseMeta({
    title: 'Uses',
    description: 'A list of hardware and software I use to do my thing',
  });
};

export const Uses = () => {
  return (
    <>
      <ProjectContainer className={styles.uses}>
        <ProjectBackground
          src={usesBackground}
          placeholder={usesBackgroundPlaceholder}
          opacity={0.7}
        />
        <ProjectHeader
          title="Uses"
          description="A List of software and hardware tools that I use to be productive and yeah, that is a Goku in the background."
        />
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Development</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <List>
                  <ListItem>
                    I use <Link href="https://code.visualstudio.com/">VSCode</Link> as my text
                    editor with the Dracula Official theme 
                  </ListItem>
                  <ListItem>
                    Chrome is my main browser for both development and general use.
                  </ListItem>
                  <ListItem>
                    <Link href="https://nextjs.org/">NextJs</Link> is my front end
                    Javascript library of choice.
                  </ListItem>
                  <ListItem>
                    For developing backends I generally use{' '}
                    <Link href="https://nodejs.org/en/">Node js</Link>.
                  </ListItem>
                  <ListItem>
                    <Link href="https://tailwindcss.com/">TailwindCSS</Link> to get upcoming CSS
                    features today.
                  </ListItem>
                  <ListItem>
                    As far as databases I have experience with SQL,No-SQL & Graph databases. Some of the renowned names include <Link href="https://www.mongodb.com/">Mongo DB</Link>, <Link href="https://www.postgresql.org/">Postgres</Link>
                  </ListItem>
                  <ListItem>
                    Currently using AWS EC2 for deployment
                  </ListItem>
                   <ListItem>
                    As far as containerization is concerned, I use <Link href="https://www.docker.com/">Docker</Link> for creating reproducible development and production environments.
                  </ListItem>
                </List>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow stretch width="m">
              <ProjectSectionHeading>Hardware</ProjectSectionHeading>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableHeadCell>Operating system</TableHeadCell>
                    <TableCell>Windows 11</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Processor</TableHeadCell>
                    <TableCell>AMD Ryzen 7 3700x</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>GPU</TableHeadCell>
                    <TableCell>Colorful 3070</TableCell>
                  </TableRow>                  
                </TableBody>
              </Table>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </>
  );
};
