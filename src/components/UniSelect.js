import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function UniversitySelect({ value, onChange }) {
  const universities = [
    { name: "University of Port Harcourt (UNIPORT)", value: "uniport" },
    { name: "Rivers State University (RSU)", value: "rsu" },
    { name: "Ignatius Ajuru University of Education (IAUE)", value: "iaue" },
    { name: "National Open University of Nigeria (NOUN)", value: "noun" },
  ];

  return (
    <Select className='' value={value} onValueChange={onChange}>
      <SelectTrigger className="w-full p-6">
        <SelectValue placeholder="Select a university" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Universities</SelectLabel>
          {universities.map((uni) => (
            <SelectItem key={uni.value} value={uni.value}>
              {uni.name}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
