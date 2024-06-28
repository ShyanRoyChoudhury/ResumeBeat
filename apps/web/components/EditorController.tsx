import {
  cn,
  Input,
  Label,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Textarea,
} from '@repo/ui';
import React from 'react';

function EditorController({ className }: { className?: string }) {
  return (
    <div className={cn(`h-full overflow-y-auto px-4`, className)}>
      <div>
        <div className="text-lg font-medium py-1">Contact Information</div>
        <div className="space-y-1">
          <Label htmlFor="name">Name</Label>
          <Input id="name" />
        </div>
        <div className="space-y-1">
          <Label htmlFor="title">Title</Label>
          <Input id="title" />
        </div>
        <div className="space-y-1">
          <Label htmlFor="summary">Summary</Label>
          <Textarea id="summary" />
        </div>
        <div className="flex space-x-8">
          <div className="w-1/2">
            <Label htmlFor="phone number">Phone Number</Label>
            <Input id="phone number" />
          </div>
          <div className="w-1/2">
            <Label htmlFor="Website">Website</Label>
            <Input id="Website" />
          </div>
        </div>
        <div className="flex space-x-8">
          <div className="w-1/2">
            <Label htmlFor="Email">Email</Label>
            <Input id="Email" />
          </div>
          <div className="w-1/2">
            <Label htmlFor="Location">Location</Label>
            <Input id="Location" />
          </div>
        </div>
      </div>

      <div>
        <div className="text-lg font-medium py-1">Work Experience</div>
        <div className="flex space-x-8">
          <div className="w-1/2">
            <Label htmlFor="Email">Company</Label>
            <Input id="Email" />
          </div>
          <div className="w-1/2">
            <Label htmlFor="Location">Role</Label>
            <Input id="Location" />
          </div>
        </div>
        <div className="flex space-x-8">
          <div className="w-1/2">
            <Label htmlFor="Email">Date Range</Label>
            <Input id="Email" />
          </div>
          <div className="w-1/2">
            <Label htmlFor="Location">Location</Label>
            <Input id="Location" />
          </div>
        </div>
        <div className="space-y-1">
          <div className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"'>
            Job Type
          </div>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Full-Time">Full Time</SelectItem>
              <SelectItem value="Part-Time">Part Time</SelectItem>
              <SelectItem value="Remote">Remote</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-1">
          <Label htmlFor="Job-Description">Job Description</Label>
          <Textarea id="Job-Description" />
        </div>
      </div>

      <div></div>
    </div>
  );
}

export default EditorController;
