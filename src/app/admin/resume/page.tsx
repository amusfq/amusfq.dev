'use client';

import {EducationProps, ExperienceProps, Title} from "@/components/resume";
import {collection, getDocs, getFirestore, doc, addDoc, updateDoc} from "@firebase/firestore";
import {firebaseApp} from "../../../../firebase-app-config";
import dayjs from "dayjs";
import {useEffect, useState} from "react";
import {
  Button, Checkbox,
  Input,
  Label,
  Spinner,
  Textarea,
  Timeline,
  TimelineContent,
  TimelineItem,
  TimelinePoint
} from "keep-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {Plus, XCircle} from "@phosphor-icons/react";
import Select from "react-select";

export default function AdminResume() {
  const [educations, setEducations] = useState<EducationProps[]>([])
  const [experiences, setExperiences] = useState<ExperienceProps[]>([])
  const [isLoadingEducation, setIsLoadingEducation] = useState(false);
  const [isLoadingExperience, setIsLoadingExperience] = useState(false);
  const db = getFirestore(firebaseApp);

  async function getEducations() {
    let query = await getDocs(collection(db, "educations"));
    const prevEducations: EducationProps[] = [];
    query.forEach((doc) => {
      const docData = doc.data();
      prevEducations.push({
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
    prevEducations.sort((a, b) => {
      return dayjs(b.end_date, 'MMM YYYY').isAfter(dayjs(a.end_date, 'MMM YYYY')) ? 1 : -1;
    });
    setEducations(prevEducations)
  }

  async function getExperiences() {
    let query = await getDocs(collection(db, "experiences"));
    const prevExperiences: ExperienceProps[] = [];
    query.forEach((doc) => {
      const docData = doc.data();
      prevExperiences.push({
        id: doc.id,
        start_date: dayjs(docData.start_date.toDate()).format('MMM YYYY'),
        end_date: docData.end_date ? dayjs(docData.end_date.toDate()).format('MMM YYYY') : null,
        title: docData.title,
        employment_type: docData.employment_type,
        location_type: docData.location_type,
        skills: JSON.parse(docData.skills),
        company: docData.company,
        location: docData.location,
        description: docData.description,
      });
    });
    prevExperiences.sort((a, b) => {
      return dayjs(b.end_date, 'MMM YYYY').isAfter(dayjs(a.end_date, 'MMM YYYY')) ? 1 : -1;
    });
    setExperiences(prevExperiences)
  }

  const getData = async () => {
    await Promise.all([getEducations(), getExperiences()]);
  }

  const handleChange = (type: 'educations' | 'experiences', idx: number, field: string, value: Date | string | null) => {
    if (type === 'educations') {
      const prevEducations = [...educations];
      if (['start_date', 'end_date'].includes(field)) {
        // @ts-ignore
        prevEducations[idx][field] = value !== null ? dayjs(value).format('MMM YYYY') : value;
      } else {
        // @ts-ignore
        prevEducations[idx][field] = value;
      }
      setEducations(prevEducations)
    } else {
      const prevExperiences = [...experiences];
      if (['start_date', 'end_date'].includes(field)) {
        // @ts-ignore
        prevExperiences[idx][field] = value !== null ? dayjs(value).format('MMM YYYY') : value;
      } else {
        // @ts-ignore
        prevExperiences[idx][field] = value;
      }
      setExperiences(prevExperiences)
    }
  }

  const handleAddClick = (type: 'educations' | 'experiences') => {
    if (type === 'educations')
      setEducations([{
        id: '',
        start_date: dayjs().format('MMM YYYY'),
        end_date: dayjs().format('MMM YYYY'),
        format: 'MMM YYYY',
        field_study: '',
        school: '',
        description: '',
        activities: []
      }, ...educations])
    setExperiences([{
      id: '',
      start_date: dayjs().format('MMM YYYY'),
      end_date: dayjs().format('MMM YYYY'),
      title: '',
      employment_type: '',
      location_type: '',
      company: '',
      location: '',
      description: '',
      skills: []
    }, ...experiences])
  }

  const addActivity = (type: 'educations' | 'experiences', idx: number, value: string) => {
    if (type === 'educations') {
      const prevEducations = [...educations];
      prevEducations[idx].activities.push(value);
      setEducations(prevEducations);
    } else {
      const prevExperiences = [...experiences];
      prevExperiences[idx].skills.push(value);
      setExperiences(prevExperiences);
    }
  }

  const removeActivity = (type: 'educations' | 'experiences', idx: number, idy: number) => {
    if (type === 'educations') {
      const prevEducations = [...educations];
      prevEducations[idx].activities.splice(idy, 1);
      setEducations(prevEducations)
    } else {
      const prevExperiences = [...experiences];
      prevExperiences[idx].skills.splice(idy, 1);
      setExperiences(prevExperiences)
    }
  }

  const removeItem = (type: 'educations' | 'experiences', idx: number) => {
    if (type === 'educations') {
      const prevEducations = [...educations];
      prevEducations.splice(idx, 1);
      setEducations(prevEducations)
    } else {
      const prevExperiences = [...experiences];
      prevExperiences.splice(idx, 1);
      setExperiences(prevExperiences)
    }
  }

  const handleSave = async (type: 'educations' | 'experiences') => {
    if (type === 'educations') {
      setIsLoadingEducation(true);
      for (const item of educations) {
        const payload = {
          start_date: dayjs(item.start_date, 'MMM YYYY').toDate(),
          end_date: item.end_date ? dayjs(item.end_date, 'MMM YYYY').toDate() : null,
          format: 'MMM YYYY',
          field_study: item.field_study,
          school: item.school,
          description: item.description,
          activities: JSON.stringify(item.activities)
        }
        if (item.id) {
          await updateDoc(doc(db, type, item.id), payload);
        } else {
          await addDoc(collection(db, type), payload);
        }
      }
    } else {
      setIsLoadingExperience(true);
      for (const item of experiences) {
        const payload = {
          start_date: dayjs(item.start_date, 'MMM YYYY').toDate(),
          end_date: item.end_date ? dayjs(item.end_date, 'MMM YYYY').toDate() : null,
          title: item.title,
          employment_type: item.employment_type,
          company: item.company,
          location: item.location,
          location_type: item.location_type,
          description: item.description,
          skills: JSON.stringify(item.skills)
        }
        if (item.id) {
          await updateDoc(doc(db, type, item.id), payload);
        } else {
          await addDoc(collection(db, type), payload);
        }
      }
    }
    await getData();
    setIsLoadingExperience(false);
    setIsLoadingEducation(false);
  }

  useEffect(() => {
    getData()
    // eslint-disable-next-line
  }, [])

  return (
    <div className='space-y-8'>
      <div className='space-y-1'>
        <h1 className='font-bold text-white text-3xl'>
          <span>Admin: Resume</span>
        </h1>
        <div className='border-2 border-blue-500 w-12'/>
      </div>
      <div className='flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8'>
        <EducationsSection
          timelines={educations}
          isLoading={isLoadingEducation}
          onAddClick={() => handleAddClick('educations')}
          onSave={() => handleSave('educations')}
          onChange={(idx, field, value) => handleChange('educations', idx, field, value)}
          onRemoveItem={(idx) => removeItem('educations', idx)}
          addActivity={(idx, value) => addActivity('educations', idx, value)}
          removeItem={(idx, idy) => removeActivity('educations', idx, idy)}
        />
        <ExperiencesSection
          timelines={experiences}
          isLoading={isLoadingExperience}
          onAddClick={() => handleAddClick('experiences')}
          onSave={() => handleSave('experiences')}
          onChange={(idx, field, value) => handleChange('experiences', idx, field, value)}
          onRemoveItem={(idx) => removeItem('experiences', idx)}
          addActivity={(idx, value) => addActivity('experiences', idx, value)}
          removeItem={(idx, idy) => removeActivity('experiences', idx, idy)}
        />
      </div>
    </div>
  );
}

type SectionProps<T> = {
  timelines: T[];
  isLoading: boolean;
  onAddClick: () => void;
  onSave: () => void;
  onChange: (index: number, field: string, value: any) => void;
  onRemoveItem: (index: number) => void;
  addActivity: (index: number, value: string) => void;
  removeItem: (itemIndex: number, activityIndex: number) => void;
}

const EducationsSection = (props: SectionProps<EducationProps>) => {
  const {
    timelines,
    isLoading,
    onAddClick,
    onSave,
    onChange,
    onRemoveItem,
    addActivity,
    removeItem,
  } = props;
  const [currentItem, setCurrentItem] = useState('');
  const handleCheck = (idx: number, checked: boolean) => {
    if (checked)
      onChange(idx, 'end_date', null);
    else
      onChange(idx, 'end_date', dayjs().toDate(),);
  }

  return (
    <div className='space-y-4'>
      <div className="flex flex-row space-x-3 items-center">
        <Title
          title='Educations'
          icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                     stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round"
                  d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"/>
          </svg>}
          onAddClick={onAddClick}
        />
        <Button color='success' size='xs' onClick={onSave}>
          {isLoading && (
            <span className="pr-2">
              <Spinner color="info" size="md"/>
            </span>
          )}
          {isLoading ? 'Loading...' : 'Save'}
        </Button>
      </div>
      <Timeline className='!border-gray-600'>
        {timelines.map((item, idx) => (
          <TimelineItem key={idx}>
            <TimelinePoint className={idx === 0 ? '!bg-blue-500' : '!bg-white'}/>
            <TimelineContent>
              <div className="flex flex-col space-y-2">
                <div className="flex flex-col md:flex-row space-x-2">
                  <fieldset className="w-full flex flex-col space-y-1">
                    <Label>Start Date</Label>
                    <DatePicker
                      className='rounded bg-darken text-white px-3 py-2'
                      dateFormat='MM/yyyy'
                      showMonthYearPicker
                      selected={dayjs(item.start_date, 'MMM YYYY').toDate()}
                      onChange={(value) => onChange(idx, 'start_date', value)}
                    />
                  </fieldset>
                  <fieldset className="w-full flex flex-col space-y-1">
                    <Label>End Date</Label>
                    {item.end_date && (
                      <DatePicker
                        className='rounded bg-darken text-white px-3 py-2'
                        dateFormat='MM/yyyy'
                        showMonthYearPicker
                        selected={item.end_date ? dayjs(item.end_date, 'MMM YYYY').toDate() : undefined}
                        onChange={(value) => onChange(idx, 'end_date', value)}
                      />
                    )}
                  </fieldset>
                </div>
                <fieldset className="flex items-center gap-2">
                  <Checkbox defaultChecked={item.end_date === null} id="checkbox"
                            onChange={(e) => handleCheck(idx, e.target.checked)}/>
                  <Label htmlFor="checkbox">I am currently study</Label>
                </fieldset>
                <fieldset className="space-y-1 w-full">
                  <Label>School</Label>
                  <Input
                    className='!bg-darken'
                    type="text"
                    value={item.school}
                    onChange={(e) => onChange(idx, 'school', e.target.value)}
                  />
                </fieldset>
                <fieldset className="space-y-1 w-full">
                  <Label>Field Study</Label>
                  <Input
                    className='!bg-darken'
                    type="text"
                    value={item.field_study}
                    onChange={(e) => onChange(idx, 'field_study', e.target.value)}
                  />
                </fieldset>
                <fieldset className="space-y-1 w-full">
                  <Label>Description</Label>
                  <Textarea
                    placeholder="Description.."
                    rows={8}
                    className='!bg-darken'
                    onChange={(e) => onChange(idx, 'description', e.target.value)}
                    value={item.description}
                  />
                </fieldset>
                <fieldset className="space-y-1 w-full">
                  <Label>Activities</Label>
                  <div className="flex flex-row items-center space-x-2">
                    <Input
                      className='!bg-darken'
                      type="text"
                      value={currentItem}
                      onChange={(e) => setCurrentItem(e.target.value)}
                    />
                    <Button onClick={() => {
                      addActivity(idx, currentItem);
                      setCurrentItem('');
                    }}>
                      <Plus/>
                    </Button>
                  </div>
                </fieldset>
                <div className="flex flex-wrap items-center gap-1">
                  {item.activities.map((activity, idy) => (
                    <div key={idy}
                         className='text-gray-400 text-xs bg-lighten px-2 py-1 rounded-full flex flex-row items-center space-x-1'>
                      <span>{activity}</span>
                      <button className='text-red-500 hover:text-white' onClick={() => removeItem(idx, idy)}>
                        <XCircle size={16}/>
                      </button>
                    </div>
                  ))}
                </div>
                <Button color='error' size='xs' onClick={() => onRemoveItem(idx)}>Remove Item</Button>
              </div>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
      {timelines.length < 1 && (
        <p className='text-white'>No item yet</p>
      )}
    </div>
  );
};

const ExperiencesSection = (props: SectionProps<ExperienceProps>) => {
  const {
    timelines,
    isLoading,
    onAddClick,
    onSave,
    onChange,
    onRemoveItem,
    addActivity,
    removeItem,
  } = props;
  const [currentItem, setCurrentItem] = useState('');
  const handleCheck = (idx: number, checked: boolean) => {
    if (checked)
      onChange(idx, 'end_date', null);
    else
      onChange(idx, 'end_date', dayjs().toDate(),);
  }
  const employmentTypes = [
    {label: 'Full-time', value: 'Full-time'},
    {label: 'Part-time', value: 'Part-time'},
    {label: 'Self-employed', value: 'Self-employed'},
    {label: 'Freelance', value: 'Freelance'},
    {label: 'Contract', value: 'Contract'},
    {label: 'Internship', value: 'Internship'}
  ];
  const locationTypes = [
    {label: 'On-site', value: 'On-site'},
    {label: 'Hybrid', value: 'Hybrid'},
    {label: 'Remote', value: 'Remote'},
  ];

  return (
    <div className='space-y-4'>
      <div className="flex flex-row space-x-3 items-center">
        <Title
          title='Experiences'
          icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                     stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round"
                  d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"/>
          </svg>}
          onAddClick={onAddClick}
        />
        <Button color='success' size='xs' onClick={onSave}>
          {isLoading && (
            <span className="pr-2">
              <Spinner color="info" size="md"/>
            </span>
          )}
          {isLoading ? 'Loading...' : 'Save'}
        </Button>
      </div>
      <Timeline className='!border-gray-600'>
        {timelines.map((item, idx) => (
          <TimelineItem key={idx}>
            <TimelinePoint className={idx === 0 ? '!bg-blue-500' : '!bg-white'}/>
            <TimelineContent>
              <div className="flex flex-col space-y-2">
                <div className="flex flex-col md:flex-row space-x-2">
                  <fieldset className="w-full flex flex-col space-y-1">
                    <Label>Start Date</Label>
                    <DatePicker
                      className='rounded bg-darken text-white px-3 py-2'
                      dateFormat='MM/yyyy'
                      showMonthYearPicker
                      selected={dayjs(item.start_date, 'MMM YYYY').toDate()}
                      onChange={(value) => onChange(idx, 'start_date', value)}
                    />
                  </fieldset>
                  <fieldset className="w-full flex flex-col space-y-1">
                    <Label>End Date</Label>
                    {item.end_date && (
                      <DatePicker
                        className='rounded bg-darken text-white px-3 py-2'
                        dateFormat='MM/yyyy'
                        showMonthYearPicker
                        selected={item.end_date ? dayjs(item.end_date, 'MMM YYYY').toDate() : undefined}
                        onChange={(value) => onChange(idx, 'end_date', value)}
                      />
                    )}
                  </fieldset>
                </div>
                <fieldset className="flex items-center gap-2">
                  <Checkbox defaultChecked={item.end_date === null} id="checkbox"
                            onChange={(e) => handleCheck(idx, e.target.checked)}/>
                  <Label htmlFor="checkbox">I am currently working in this role</Label>
                </fieldset>
                <fieldset className="space-y-1 w-full">
                  <Label>Company</Label>
                  <Input
                    className='!bg-darken'
                    type="text"
                    value={item.company}
                    onChange={(e) => onChange(idx, 'company', e.target.value)}
                  />
                </fieldset>
                <fieldset className="space-y-1 w-full">
                  <Label>Title</Label>
                  <Input
                    className='!bg-darken'
                    type="text"
                    value={item.title}
                    onChange={(e) => onChange(idx, 'title', e.target.value)}
                  />
                </fieldset>
                <fieldset className="space-y-1 w-full">
                  <Label>Employment Type</Label>
                  <Select
                    classNamePrefix="select"
                    isLoading={isLoading}
                    name="employment_type"
                    options={employmentTypes}
                    // @ts-ignore
                    onChange={(option) => onChange(idx, 'employment_type', option.value)}
                    value={employmentTypes.find(option => option.value === item.employment_type)}
                  />
                </fieldset>
                <fieldset className="space-y-1 w-full">
                  <Label>Location</Label>
                  <Input
                    className='!bg-darken'
                    type="text"
                    value={item.location}
                    onChange={(e) => onChange(idx, 'location', e.target.value)}
                  />
                </fieldset>
                <fieldset className="space-y-1 w-full">
                  <Label>Location Type</Label>
                  <Select
                    classNamePrefix="select"
                    defaultValue={locationTypes[0]}
                    isLoading={isLoading}
                    name="location_type"
                    options={locationTypes}
                    // @ts-ignore
                    onChange={(option) => onChange(idx, 'location_type', option.value)}
                    value={locationTypes.find(option => option.value === item.location_type)}
                  />
                </fieldset>
                <fieldset className="space-y-1 w-full">
                  <Label>Description</Label>
                  <Textarea
                    placeholder="Description.."
                    rows={8}
                    className='!bg-darken'
                    onChange={(e) => onChange(idx, 'description', e.target.value)}
                    value={item.description}
                  />
                </fieldset>
                <fieldset className="space-y-1 w-full">
                  <Label>Skills</Label>
                  <div className="flex flex-row items-center space-x-2">
                    <Input
                      className='!bg-darken'
                      type="text"
                      value={currentItem}
                      onChange={(e) => setCurrentItem(e.target.value)}
                    />
                    <Button onClick={() => {
                      addActivity(idx, currentItem);
                      setCurrentItem('')
                    }}>
                      <Plus/>
                    </Button>
                  </div>
                </fieldset>
                <div className="flex flex-wrap items-center gap-1">
                  {item.skills.map((skill, idy) => (
                    <div key={idy}
                         className='text-gray-400 text-xs bg-lighten px-2 py-1 rounded-full flex flex-row items-center space-x-1'>
                      <span>{skill}</span>
                      <button className='text-red-500 hover:text-white' onClick={() => removeItem(idx, idy)}>
                        <XCircle size={16}/>
                      </button>
                    </div>
                  ))}
                </div>
                <Button color='error' size='xs' onClick={() => onRemoveItem(idx)}>Remove Item</Button>
              </div>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
      {timelines.length < 1 && (
        <p className='text-white'>No item yet</p>
      )}
    </div>
  );
};
