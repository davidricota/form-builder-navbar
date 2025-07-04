"use client";

import { FormBuilderNavbar } from "@/components/form-builder-navbar";
import { FormPageContent } from "@/components/form-page-content";
import { Header } from "@/components/header";
import { useFormBuilderContext } from "@/contexts/form-builder-context";

export default function Home() {
  const { pages, activePageId } = useFormBuilderContext();

  const activePage = pages.find((page) => page.id === activePageId);

  return (
    <div className="bg-gray-25 flex h-screen min-h-screen flex-col">
      <Header />
      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto">
        <FormPageContent
          pageTitle={activePage?.name || "Form Page"}
          pageId={activePageId}
          pageIcon={activePage?.icon || "document"}
        />
      </div>
      {/* Bottom Navigation */}
      <div className="w-full border-t border-gray-200 bg-navbar">
        <div className="container">
          <FormBuilderNavbar />
        </div>
      </div>
    </div>
  );
}
