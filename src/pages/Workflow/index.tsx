import { useParams } from "react-router-dom";
import OpenAIHelperWorkflow from "../../components/Workflow/OpenAIHelperWorkflow";
import { PropsWithChildren } from "react";

const Workflow = () => {
  const { workflow } = useParams();

  const selectedWorkflow =
    workflows[
      workflow ? (workflow as keyof typeof workflows) : "openai-helper"
    ];

  if (selectedWorkflow) {
    const { title, description, action } = selectedWorkflow;
    return (
      <WorkflowContainer
        title={title}
        description={description}
        action={action}
      >
        {workflow === "openai-helper" ? (
          <OpenAIHelperWorkflow />
        ) : (
          <div className="flex h-full items-center justify-center">
            <p className="text-xl font-semibold">
              #{workflow} workflow is not yet implemented. Please check back
              later.
            </p>
          </div>
        )}
      </WorkflowContainer>
    );
  }

  return (
    <div className="m-2 flex-1 overflow-hidden rounded-lg border-zinc-900 bg-gradient-to-r from-neutral-900 to-neutral-950">
      <div className="flex h-full items-center justify-center text-2xl font-semibold">
        Opps! workflow not found.
      </div>
    </div>
  );
};

interface WorkflowContainerProps extends PropsWithChildren {
  title?: string;
  description?: string;
  action?: string;
}

const WorkflowContainer = ({
  children,
  title,
  description,
  action,
}: WorkflowContainerProps) => {
  return (
    <div className="m-2 flex flex-1 flex-col rounded-lg">
      <div className="p-5 ">
        <p className="text-2xl font-bold">{title}</p>
        <p className="mt-3 text-xs text-white/70">
          <span className="rounded  bg-violet-500/20 p-1 font-semibold text-violet-200">
            {action}
          </span>{" "}
          {description}
        </p>
      </div>
      <div className="flex-1 overflow-hidden rounded-lg border-zinc-900 bg-gradient-to-r from-neutral-900 to-neutral-950">
        {children}
      </div>
    </div>
  );
};

const workflows = {
  "openai-helper": {
    title: "OpenAI Helper",
    description: "Uses OpenAi to get done multiple things",
    action: "Configure workflow",
  },
  "data-visualization": {
    title: "Data Visualization",
    description: "Visualize data in different ways",
    action: "Configure workflow",
  },
  "user-authentication": {
    title: "User Authentication",
    description: "Authenticate users in different ways",
    action: "Configure workflow",
  },
  "e-commerce-store": {
    title: "E-Commerce Store",
    description: "Create an e-commerce store",
    action: "Configure workflow",
  },
  "social-media-feed": {
    title: "Social Media Feed",
    description: "Create a social media feed",
    action: "Configure workflow",
  },
  "super-terminal": {
    title: "Super Terminal",
    description: "The ultimate command-line interface.",
    action: "Configure workflow",
  },
  "visual-studio-magic": {
    title: "Visual Studio Magic",
    description: "Unleash the power of coding.",
    action: "Configure workflow",
  },
};

export default Workflow;
