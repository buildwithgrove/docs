import { Button, Group, Textarea, TextInput } from "@mantine/core"
import { useForm } from "@mantine/form"
import useDocusaurusContext from "@docusaurus/useDocusaurusContext"

type ContactFormProps = {
  setFormSubmitted: React.Dispatch<React.SetStateAction<boolean>>
}

export default function ContactForm({ setFormSubmitted }: ContactFormProps) {
  const {
    siteConfig: { mailjetKey },
  } = useDocusaurusContext()

  const form = useForm({
    name: "enterprise-form",
    initialValues: {
      email: "",
      companyWebsite: "",
      tellUsMore: "",
      nodeDetails: "",
      relaysRequesting: "",
      mostImportant: "",
      comment: "",
    },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  })

  const handleSubmit = (values: typeof form.values) => {
    console.log(values)

    // todo: send email
    const res = fetch("https://api.mailjet.com/v3.1/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${mailjetKey}`,
      },
      body: JSON.stringify({
        Messages: [
          {
            From: {
              Email: "portal@grove.city",
              Name: "Grove Portal",
            },
            To: [
              {
                Email: "kevin.utoft@grove.city",
                Name: "Kevin Utoft",
              },
            ],
            TemplateID: 5296188,
            TemplateLanguage: true,
            Subject: "New Enterprise Contact",
            Variables: values,
          },
        ],
      }),
    })

    setFormSubmitted(true)
  }

  return (
    <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
      <TextInput
        required
        label="Email"
        placeholder="your@email.com"
        name="email"
        type="email"
        {...form.getInputProps("email")}
      />
      <TextInput
        label="Company Website"
        placeholder=""
        name="companyWebsite"
        {...form.getInputProps("companyWebsite")}
      />
      <Textarea
        label="Tell us more about what you are looking for"
        placeholder="Are you seeking RPC service for your dapp, an RPC gateway for client companies, or blockchain nodes as a service?"
        name="tellUsMore"
        {...form.getInputProps("tellUsMore")}
      />
      <Textarea
        label="Are you running nodes internally or using a third party"
        placeholder="Do you run your own nodes or utilize third-party nodes?  "
        name="nodeDetails"
        {...form.getInputProps("nodeDetails")}
      />
      <TextInput
        label="How many daily RPC are you currently requesting"
        placeholder="Estimate your daily RPC request volume."
        name="relaysRequested"
        type="number"
        {...form.getInputProps("relaysRequested")}
      />
      <TextInput
        required
        label="What is the most important for you when choosing a RPC provider"
        placeholder="Decentralization, cost-effectiveness, or performance?"
        name="mostImportant"
        {...form.getInputProps("mostImportant")}
      />
      <Textarea
        label="Would you like to drop a comment"
        name="comment"
        {...form.getInputProps("comment")}
      />
      <Group justify="flex-end" mt="md">
        <Button type="submit">Let's Talk</Button>
      </Group>
    </form>
  )
}
