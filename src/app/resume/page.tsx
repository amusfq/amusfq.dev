import {Metadata} from "next";
import dayjs from "dayjs";
import {collection, getDocs, getFirestore} from "@firebase/firestore";
import {firebaseApp} from "../../../firebase-app-config";
import {Pencil} from "@phosphor-icons/react/dist/ssr";
import {getUserSS} from "firebase-nextjs/server/auth";
import Link from "next/link";
import {EducationSection, EducationProps, TitleProps, ExperienceProps, ExperienceSection} from "@/components/resume";

export const metadata: Metadata = {
  title: 'Resume',
  description: "Resume - Personal Portfolio",
};

type DataProps<T> = {
  timelines: T[]
} & TitleProps;

async function getData() {
  const db = getFirestore(firebaseApp);
  let query = await getDocs(collection(db, "educations"));
  const educations: DataProps<EducationProps> = {
    title: 'Educations',
    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
               stroke="currentColor" className="size-6">
      <path strokeLinecap="round" strokeLinejoin="round"
            d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"/>
    </svg>,
    timelines: []
  };
  query.forEach((doc) => {
    const docData = doc.data();
    educations.timelines.push({
      id: doc.id,
      start_date: dayjs(docData.start_date.toDate()).format(docData.format),
      end_date: docData.end_date ? dayjs(docData.end_date.toDate()).format(docData.format) : null,
      format: docData.format,
      field_study: docData.field_study,
      school: docData.school,
      description: docData.description,
      activities: JSON.parse(docData.activities),
    });
  });
  educations.timelines.sort((a, b) => {
    return dayjs(b.end_date, 'MMM YYYY').isAfter(dayjs(a.end_date, 'MMM YYYY')) ? 1 : -1;
  });
  query = await getDocs(collection(db, "experiences"));
  const experiences: DataProps<ExperienceProps> = {
    title: 'Experiences',
    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
               stroke="currentColor" className="size-6">
      <path strokeLinecap="round" strokeLinejoin="round"
            d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"/>
    </svg>,
    timelines: []
  };
  query.forEach((doc) => {
    const docData = doc.data();
    experiences.timelines.push({
      id: doc.id,
      start_date: dayjs(docData.start_date.toDate()).format('MMM YYYY'),
      end_date: docData.end_date ? dayjs(docData.end_date.toDate()).format('MMM YYYY') : 'Present',
      title: docData.title,
      employment_type: docData.employment_type,
      skills: JSON.parse(docData.skills),
      company: docData.company,
      location: docData.location,
      location_type: docData.location_type,
      description: docData.description,
    });
  });
  experiences.timelines.sort((a, b) => {
    return dayjs(b.end_date, 'MMM YYYY').isAfter(dayjs(a.end_date, 'MMM YYYY')) ? 1 : -1;
  });
  return {educations, experiences};
}

export default async function Resume() {
  const {educations, experiences} = await getData();
  const user = await getUserSS()

  return (
    <div className='space-y-8'>
      <div className='space-y-1'>
        <div className='flex flex-row space-x-3 items-center'>
          <h1 className='font-bold text-white text-3xl'>
            <span>Resume</span>
          </h1>
          {user && <Link href='/admin/resume'><Pencil size={24} color="#ffffff"/></Link>}
        </div>
        <div className='border-2 border-blue-500 w-12'/>
      </div>
      <div className='flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8'>
        <EducationSection title={educations.title} icon={educations.icon} timelines={educations.timelines}/>
        <ExperienceSection title={experiences.title} icon={experiences.icon} timelines={experiences.timelines}/>
      </div>
    </div>
  );
}
