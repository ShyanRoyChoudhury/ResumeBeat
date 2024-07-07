'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { resumeFormSchema, resumeSchemaType } from '@repo/zod';
import { Controller, useFieldArray, useForm } from 'react-hook-form';

import {
  Button,
  Form,
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Textarea,
} from './ui';
import { useEffect } from 'react';
import { useDispatch } from '@repo/redux-utils';
import { setForm } from '@repo/redux-utils/lib/web/features/editorForm/editorFormSlice';

export function ResumeForm() {
  // 1. Define your form.
  const form = useForm<resumeSchemaType>({
    resolver: zodResolver(resumeFormSchema),
    defaultValues: {
      name: '',
      title: '',
      summary: '',
      number: '',
      email: '',
      website: '',
      location: '',
      company: [
        {
          name: '',
          role: '',
          jobType: 'Full-Time',
          dateRange: '',
          location: '',
          jobDescription: '',
        },
      ],
      education: [
        {
          name: '',
          degree: '',
          dateRange: '',
          location: '',
          description: '',
        },
      ],
      links: [
        {
          label: '',
          link: '',
        },
      ],
      skills: [
        {
          skill: '',
        },
      ],
      languages: [
        {
          language: '',
        },
      ],
      certificates: [
        {
          name: '',
          issuer: '',
          date: '',
          website: '',
          summary: '',
        },
      ],
      projects: [
        {
          name: '',
          date: '',
          description: '',
          website: '',
        },
      ],
    },
  });
  const {
    fields: companyFields,
    append: appendCompany,
    remove: removeCompany,
  } = useFieldArray({
    name: 'company',
    control: form.control,
  });

  const {
    fields: educationFields,
    append: appendEducation,
    remove: removeEducation,
  } = useFieldArray({
    name: 'education',
    control: form.control,
  });

  const {
    fields: linksFields,
    append: appendLinks,
    remove: removeLinks,
  } = useFieldArray({
    name: 'links',
    control: form.control,
  });

  const {
    fields: skillsFields,
    append: appendSkills,
    remove: removeSkills,
  } = useFieldArray({
    name: 'skills',
    control: form.control,
  });

  const {
    fields: languagesFields,
    append: appendLanguages,
    remove: removeLanguages,
  } = useFieldArray({
    name: 'languages',
    control: form.control,
  });

  const {
    fields: certificationFields,
    append: appendCertification,
    remove: removeCertification,
  } = useFieldArray({
    name: 'certificates',
    control: form.control,
  });

  const {
    fields: projectsFields,
    append: appendProjects,
    remove: removeProjects,
  } = useFieldArray({
    name: 'projects',
    control: form.control,
  });

  // 2. Define a submit handler.
  function onSubmit(values: resumeSchemaType) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  const formValues = form.watch();
  const dispatch = useDispatch();
  useEffect(() => {
    const updatedFormValues = { ...formValues };
    dispatch(setForm(updatedFormValues));
    // console.log('Form values changed:', formValues);
    // Perform any necessary actions here
  }, [formValues]);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-1">
        <div>
          <div className="text-lg font-medium py-1">Contact Information</div>
          <Controller
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Controller
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Controller
            control={form.control}
            name="summary"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Summary</FormLabel>
                <FormControl>
                  <Textarea {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex space-x-8">
            <div className="w-1/2">
              <Controller
                control={form.control}
                name="number"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="w-1/2">
              <Controller
                control={form.control}
                name="website"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Website</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <div className="flex space-x-8">
            <div className="w-1/2">
              <Controller
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="w-1/2">
              <Controller
                control={form.control}
                name="location"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Location</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
        </div>

        <div>
          <div className="text-lg font-medium py-1">Work Experience</div>
          <div className="space-y-6">
            {companyFields.map((field, index) => (
              <div key={field.id} className="border-2 p-4">
                <div className="flex space-x-8">
                  <div className="w-1/2">
                    <Controller
                      control={form.control}
                      name={`company.${index}.name`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Company</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="w-1/2">
                    <Controller
                      control={form.control}
                      name={`company.${index}.role`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>role</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                <div className="flex  space-x-8">
                  <div className="w-1/2">
                    <Controller
                      control={form.control}
                      name={`company.${index}.dateRange`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Date Range</FormLabel>

                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="w-1/2">
                    <Controller
                      control={form.control}
                      name={`company.${index}.location`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Location</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
                <Controller
                  control={form.control}
                  name={`company.${index}.role`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Job Type</FormLabel>

                      <FormControl>
                        <Select {...field}>
                          <SelectTrigger className="w-[180px]">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Full-Time">Full-Time</SelectItem>
                            <SelectItem value="Part-Time">Part-Time</SelectItem>
                            <SelectItem value="Internship">
                              Internship
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Controller
                  control={form.control}
                  name={`company.${index}.jobDescription`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Job Description</FormLabel>
                      <FormControl>
                        <Textarea {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            ))}
          </div>
          <Button
            onClick={() => {
              appendCompany({
                name: '',
                role: '',
                jobDescription: '',
                location: '',
                jobType: 'Full-Time',
                dateRange: '',
              });
            }}
          >
            Add Experience
          </Button>
        </div>

        <div>
          <div className="text-lg font-medium py-1">Projects</div>
          <div className="space-y-6">
            {projectsFields.map((field, index) => (
              <div key={field.id} className="border-2 p-4">
                <div className="flex space-x-8">
                  <div className="w-1/2">
                    <Controller
                      control={form.control}
                      name={`projects.${index}.name`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="w-1/2">
                    <Controller
                      control={form.control}
                      name={`projects.${index}.website`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Website</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                <div className="flex  space-x-8">
                  <div className="w-1/2">
                    <Controller
                      control={form.control}
                      name={`projects.${index}.date`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Date</FormLabel>

                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                <Controller
                  control={form.control}
                  name={`company.${index}.jobDescription`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Project Description</FormLabel>
                      <FormControl>
                        <Textarea {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            ))}
          </div>
          <Button
            onClick={() => {
              appendProjects({
                name: '',
                website: '',
                description: '',
                date: '',
              });
            }}
          >
            Add Projects
          </Button>
        </div>

        <div>
          <div className="text-lg font-medium py-1">Education</div>
          <div className="space-y-6">
            {educationFields.map((field, index) => (
              <div key={field.id} className="border-2 p-4">
                <div className="flex space-x-8">
                  <div className="w-1/2">
                    <Controller
                      control={form.control}
                      name={`education.${index}.name`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Institute</FormLabel>

                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="w-1/2">
                    <Controller
                      control={form.control}
                      name={`education.${index}.degree`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Degree</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                <div className="flex  space-x-8">
                  <div className="w-1/2">
                    <Controller
                      control={form.control}
                      name={`education.${index}.dateRange`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Date Range</FormLabel>

                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="w-1/2">
                    <Controller
                      control={form.control}
                      name={`education.${index}.location`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Location</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                <Controller
                  control={form.control}
                  name={`education.${index}.description`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Job Description</FormLabel>
                      <FormControl>
                        <Textarea {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            ))}
          </div>
          <Button
            onClick={() => {
              appendEducation({
                name: '',
                degree: '',
                description: '',
                location: '',
                dateRange: '',
              });
            }}
          >
            Add Education
          </Button>
        </div>

        <div>
          <div className="text-lg font-medium py-1">Links</div>
          <div className="space-y-6">
            {linksFields.map((field, index) => (
              <div key={field.id} className="border-2 p-4">
                <div className="flex space-x-8">
                  <div className="w-1/2">
                    <Controller
                      control={form.control}
                      name={`links.${index}.label`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Label</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="w-1/2">
                    <Controller
                      control={form.control}
                      name={`links.${index}.link`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Link</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <Button
            onClick={() => {
              appendLinks({
                label: '',
                link: '',
              });
            }}
          >
            Add Education
          </Button>
        </div>

        <div>
          <div className="text-lg font-medium py-1">Skills</div>
          <div className="space-y-6">
            {skillsFields.map((field, index) => (
              <div key={field.id} className="border-2 p-4">
                <div className="flex space-x-8">
                  <div className="w-1/2">
                    <Controller
                      control={form.control}
                      name={`skills.${index}.skill`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Skill</FormLabel>

                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  {/* <div className="w-1/2">
                    <Controller
                      control={form.control}
                      name={`skills.${index}.link`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Degree</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div> */}
                </div>
              </div>
            ))}
          </div>
          <Button
            onClick={() => {
              appendSkills({
                skill: '',
                // link: '',
              });
            }}
          >
            Add Skills
          </Button>
        </div>

        <div>
          <div className="text-lg font-medium py-1">Languages</div>
          <div className="space-y-6">
            {languagesFields.map((field, index) => (
              <div key={field.id} className="border-2 p-4">
                <div className="flex space-x-8">
                  <div className="w-1/2">
                    <Controller
                      control={form.control}
                      name={`languages.${index}.language`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Language</FormLabel>

                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  {/* <div className="w-1/2">
                    <Controller
                      control={form.control}
                      name={`skills.${index}.link`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Degree</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div> */}
                </div>
              </div>
            ))}
          </div>
          <Button
            onClick={() => {
              appendLanguages({
                language: '',
                // link: '',
              });
            }}
          >
            Add Language
          </Button>
        </div>

        <div>
          <div className="text-lg font-medium py-1">Certification</div>
          <div className="space-y-6">
            {certificationFields.map((field, index) => (
              <div key={field.id} className="border-2 p-4">
                <div className="flex space-x-8">
                  <div className="w-1/2">
                    <Controller
                      control={form.control}
                      name={`certificates.${index}.name`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>

                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="w-1/2">
                    <Controller
                      control={form.control}
                      name={`certificates.${index}.issuer`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Issuer</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                <div className="flex space-x-8">
                  <div className="w-1/2">
                    <Controller
                      control={form.control}
                      name={`certificates.${index}.date`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Issued Date</FormLabel>

                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="w-1/2">
                    <Controller
                      control={form.control}
                      name={`certificates.${index}.website`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Website</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
                <Controller
                  control={form.control}
                  name={`certificates.${index}.summary`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Summary</FormLabel>
                      <FormControl>
                        <Textarea {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            ))}
          </div>
          <Button
            onClick={() => {
              appendCertification({
                name: '',
                issuer: '',
                date: '',
                website: '',
                summary: '',
              });
            }}
          >
            Add Certificates
          </Button>
        </div>

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
