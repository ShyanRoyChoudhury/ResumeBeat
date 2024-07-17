'use client'

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import {
  Button,
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
} from './ui';
import { cn } from "@ui/lib/utils";

const waitlistFormSchema = z.object({
  email: z
    .string({
      required_error: "Email is required"
    })
    .regex(new RegExp('^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'))
    .max(25),
  name: z.string({
    required_error: 'Name is required'
  }).min(2).max(30)
});


function WaitlistForm({
    className
  }:
    {
      className: string
    }) 
  {
  const form = useForm<z.infer<typeof waitlistFormSchema>>({
    resolver: zodResolver(waitlistFormSchema),
    defaultValues: {
      email: "",
      name: ""
    },
  })

  function onSubmit(values: z.infer<typeof waitlistFormSchema>) {
    console.log(values)
  }


  return (
    <div className={cn('md:px-4 lg:px-8 xl:px-20', className)}>
      
      
      <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Your Name" className="text-white bg-black hover:bg-[#141318] active:border-[#2B2B32]  border-[#1F1F26]" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Email" className="text-white bg-black hover:bg-[#141318] active:border-[#2B2B32]  border-[#1F1F26]" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full hover:bg-[#141318] bg-[#222126] py-4">Join the waitlist</Button>
      </form>
    </Form>

    </div>
  );
}

export default WaitlistForm;
