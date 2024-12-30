"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { ArrowRight } from "lucide-react";
import { Button } from "../../../components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../../../components/ui/form";
import { Input } from "../../../components/ui/input";
import { Textarea } from "../../../components/ui/textarea";
import { toast } from "sonner";

const formSchema = z.object({
  message: z.string().min(1, "Message is required"),
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  subject: z.string().optional(),
  phone: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      message: "",
      name: "",
      email: "",
      subject: "",
      phone: "",
    },
  });

  //   @ts-ignore
  async function onSubmit(data: FormValues) {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      toast.success("Message sent successfully!");
      form.reset();
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="w-full max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
      <div className="rounded-[32px] border border-[#01C621] p-6 sm:p-8 lg:p-12">
        <h2 className="text-2xl sm:text-3xl font-semibold text-green-900 mb-8">
          Send a message
        </h2>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea
                      placeholder="Write your message here..."
                      className="min-h-[120px] resize-none rounded-xl border-gray-200"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Your Name *"
                        className="rounded-xl border-gray-200"
                        {...field}
                      />
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
                      <Input
                        placeholder="Your Email *"
                        type="email"
                        className="rounded-xl border-gray-200"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Subject"
                        className="rounded-xl border-gray-200"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Phone"
                        type="tel"
                        className="rounded-xl border-gray-200"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className="bg-green-500 hover:bg-green-600 text-white rounded-full px-8"
            >
              Submit Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
