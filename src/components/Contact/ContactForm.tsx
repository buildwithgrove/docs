import { Alert, Button, Group, Stack, Textarea, TextInput } from "@mantine/core"
import { useForm } from "@mantine/form"
import { useEffect, useState } from "react"
import styles from "./ContactForm.module.css"
// import useDocusaurusContext from "@docusaurus/useDocusaurusContext"

export default function ContactForm() {
  const [formSubmitted, setFormSubmitted] = useState(false)

  // const {
  //   siteConfig: { customFields },
  // } = useDocusaurusContext()

  useEffect(() => {
    if (formSubmitted) {
      setTimeout(() => {
        setFormSubmitted(false)
      }, 3000)
    }
  }, [formSubmitted])

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

  const handleSubmit = async (values: typeof form.values) => {
    console.log(values)

    // todo: send email
    try {
      // const res = await fetch("https://api.mailjet.com/v3.1/send", {
      //   method: "POST",
      //   mode: "no-cors",
      //   headers: {
      //     "Content-Type": "application/json",
      //     Authorization: `Basic ${customFields.mailjetKey}`,
      //   },
      //   body: JSON.stringify({
      //     Messages: [
      //       {
      //         From: {
      //           Email: "portal@grove.city",
      //           Name: "Grove Portal",
      //         },
      //         To: [
      //           {
      //             Email: "kevin.utoft@grove.city",
      //             Name: "Kevin Utoft",
      //           },
      //         ],
      //         TemplateID: 5296188,
      //         TemplateLanguage: true,
      //         Subject: "New Enterprise Contact",
      //         Variables: values,
      //       },
      //     ],
      //   }),
      // })
      // if (res.ok) {
      // }
      setFormSubmitted(true)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
      <TextInput
        required
        label="Email"
        placeholder="your@email.com"
        name="email"
        type="email"
        className={styles.field}
        {...form.getInputProps("email")}
      />
      <TextInput
        label="Company Website"
        placeholder=""
        name="companyWebsite"
        className={styles.field}
        {...form.getInputProps("companyWebsite")}
      />
      <Textarea
        label="Tell us more about what you are looking for"
        placeholder="Are you seeking RPC service for your dapp, an RPC gateway for client companies, or blockchain nodes as a service?"
        name="tellUsMore"
        className={styles.field}
        {...form.getInputProps("tellUsMore")}
      />
      <Textarea
        label="Are you running nodes internally or using a third party"
        placeholder="Do you run your own nodes or utilize third-party nodes?  "
        name="nodeDetails"
        className={styles.field}
        {...form.getInputProps("nodeDetails")}
      />
      <TextInput
        label="How many daily RPC are you currently requesting"
        placeholder="Estimate your daily RPC request volume."
        name="relaysRequested"
        type="number"
        className={styles.field}
        {...form.getInputProps("relaysRequested")}
      />
      <TextInput
        required
        label="What is the most important for you when choosing a RPC provider"
        placeholder="Decentralization, cost-effectiveness, or performance?"
        name="mostImportant"
        className={styles.field}
        {...form.getInputProps("mostImportant")}
      />
      <Textarea
        label="Would you like to drop a comment"
        name="comment"
        className={styles.field}
        {...form.getInputProps("comment")}
      />
      <Group justify="flex-end" mt="md">
        <Button className={styles.button} type="submit" size="lg">
          Let's Talk
        </Button>
      </Group>

      {formSubmitted && (
        <Stack mt="xl">
          <Alert variant="light" color="green" title="Thank you!">
            Your submission has been received! ✅
          </Alert>
        </Stack>
      )}
    </form>
  )
}
