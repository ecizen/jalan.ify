"use client";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { useState } from "react";
import { CalendarIcon, Search, Users } from "lucide-react";

export default function TravelSearchTabs() {
 const [checkInDate, setCheckInDate] = useState<Date | undefined>(undefined);
 const [checkOutDate, setCheckOutDate] = useState<Date | undefined>(undefined);
const [guests, setGuests] = useState<string | null>(null);


  const clickHandler = () => {
    alert("Search button clicked!");
   
  };

  return (
    <div className="p-6 lg:rounded-xl md:rounded-t-xl rounded-t-xl lg:shadow-xl shadow-sm bg-white w-full">
      <Tabs defaultValue="tours"
      onValueChange={()=> {
        setCheckInDate(undefined);
        setCheckOutDate(undefined);
        setGuests(null);
      }}
      className="w-full">
        <TabsList className="mb-4 flex flex-wrap gap-2 justify-start sm:justify-center bg-gray-100">
          <TabsTrigger value="tours">Tours</TabsTrigger>
          <TabsTrigger value="hotels">Hotels</TabsTrigger>
        </TabsList>

        {["tours", "hotels"].map((type) => (
          <TabsContent value={type} key={type}>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {/* Location */}
              <div className="flex flex-col space-y-1">
                <label className="text-sm font-medium text-gray-700 text-left">
                  {type === "tours" ? "Tour Location" : "Hotel Location"}
                </label>
                <Input
                  placeholder={
                    type === "tours"
                      ? "e.g. Bali, Indonesia"
                      : "e.g. Tokyo, Japan"
                  }
                  className="w-full bg-white text-black border border-gray-300"
                />
              </div>

              {/* Check In */}
              <div className="flex flex-col space-y-1">
                <label className="text-sm font-medium text-gray-700 text-left">Check In</label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full justify-start text-left font-normal bg-white text-black border border-gray-300"
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {checkInDate ? format(checkInDate, "dd MMMM yyyy") : "Select date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0 bg-white">
                    <Calendar
                      mode="single"
                      selected={checkInDate}
                      onSelect={setCheckInDate}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>

              {/* Check Out */}
              <div className="flex flex-col space-y-1">
                <label className="text-sm font-medium text-gray-700 text-left">Check Out</label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full justify-start text-left font-normal bg-white text-black border border-gray-300"
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {checkOutDate ? format(checkOutDate, "dd MMMM yyyy") : "Select date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0 bg-white">
                    <Calendar
                      mode="single"
                      selected={checkOutDate}
                      onSelect={setCheckOutDate}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>

              {/* Guest */}
              <div className="flex flex-col space-y-1">
                <label className="text-sm font-medium text-gray-700 text-left">
  {type === "tours" ? "Guests" : "Room & Guests"}
</label>
<Button
  variant="outline"
  className="w-full justify-start text-left font-normal bg-white text-black border border-gray-300"
  onClick={() => setGuests("2 adults, 2 children")} // contoh dummy
>
  <Users className="mr-2 h-4 w-4" />
  {guests ?? "Select guests"}
</Button>

              </div>

              {/* Search */}
              <div className="flex flex-col space-y-1">
                <label className="text-sm font-medium text-gray-700 invisible">Search</label>
                <Button
                  onClick={clickHandler}
                  className="w-full bg-yellow-300 text-white hover:bg-gray-800"
                >
                  <Search className="mr-2 h-4 w-4" />
                  Search
                </Button>
              </div>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
