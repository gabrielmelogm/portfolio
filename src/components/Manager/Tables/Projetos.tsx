import { 
  Box, 
  FormControl, 
  FormLabel, 
  Input, 
  Modal as ChakraModal, 
  ModalBody, 
  ModalCloseButton, 
  ModalContent, 
  ModalHeader, 
  ModalOverlay, 
  Td, 
  Text, 
  Textarea, 
  Tr, 
  useDisclosure, 
  FormHelperText, 
  Kbd, 
  useToast,
  Progress
} from "@chakra-ui/react";

import { DefaultEditor } from "react-simple-wysiwyg"

import { useForm } from "react-hook-form"
import { useEffect, useState } from "react";
import { MdEdit, MdDelete } from "react-icons/md"
import { GiConfirmed, GiCloudUpload } from "react-icons/gi"
import { getStorage, ref, uploadBytes, uploadBytesResumable, getDownloadURL } from "firebase/storage";

import { Table } from "../Table";
import { Button } from "../../../components/Manager/Button"
import { api } from "../../../lib/api";
import { app, storage } from "../../../lib/firebase";
import { parseCookies } from "nookies";
import { useAuth } from "../../../hooks/useAuth";

interface DataProps {
  thumb: string
  title: string
  category: string
}

export function Projetos() {
  const [data, setData] = useState<DataProps []>([])
  const { isOpen, onOpen, onClose } = useDisclosure()

  async function getProjects() {
    await api.get('/projects')
      .then(({data}) => setData(data))
      .catch((e) => console.error(e))
  }

  useEffect(() => {
    getProjects()
  }, [])

  return (
    <>
      <Table
        columns={["", "Foto", "Título", "Categoria"]}
        addFunction={onOpen}
      >
        {
          data.map((item, index) => (
            <Tr
              key={index}
              color="gray.200"
            >
              <Td w={50}>
                <Box
                  display="flex"
                  gap={2}
                  color="gray.200"
                >
                  <Button backgroundColor="gray.700">
                    <MdEdit />
                  </Button>
                  <Button backgroundColor="gray.700">
                    <MdDelete />
                  </Button>
                </Box>
              </Td>
              <Td
                w={100}
                objectFit="cover"
              >
                <img src={item.thumb} alt={item.title} />
              </Td>
              <Td>
                {item.title}
              </Td>
              <Td>
                {item.category}
              </Td>
            </Tr>
          ))
        }
      </Table>
      <Modal isOpen={isOpen} onClose={onClose} onSubmit={getProjects} />
    </>
  )
}

interface CreateProjectDto {
  category: string
  description: string
  link: string
  repositoryUrl: string
  stacks: any
  thumb: any
  title: string
}

interface ModalProps { 
  isOpen: boolean
  onClose: () => void
  onSubmit: () => Promise<void>
}

function Modal({isOpen, onClose, onSubmit}: ModalProps) {
  const [loading, setLoading] = useState(false)
  const [dataFile, setDataFile] = useState(null)
  const [downloadUrl, setDownloadUrl] = useState('')
  const [progressUpload, setProgressUpload] = useState(0)
  const [html, setHtml] = useState('')
  const { register, handleSubmit } = useForm()

  const { recoverUserInformation, isAuthenticated } = useAuth()

  const toast = useToast()
  
  function formatFields(data: CreateProjectDto) {
    let { stacks } = data

    let stackList = []

    stacks = stacks.replaceAll(" ", "").split(",").forEach((stack) => {
      return stackList.push({
        name: stack
      })
    })

    const thumb = downloadUrl || ""

    const description = html

    const fields = {
      ...data,
      thumb,
      description,
      stacks: stackList
    }
    return fields
  }

  const handleUploadFile = async () => {
    setLoading(true)
    await recoverUserInformation()
    if (dataFile && isAuthenticated) {
      const name = dataFile.name
      const storageRef = ref(storage, `projects/${name}`);
      const uploadTask = uploadBytesResumable(storageRef, dataFile)

      await uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          setProgressUpload(progress)
        },
        (error) => {
          console.error(error)
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((url) => {
            setDownloadUrl(url)
            setLoading(false)
          })
        },
      )
    }
  }

  async function createProject(data: CreateProjectDto) {
    await recoverUserInformation()
    const { 'portfolio.token': token } = parseCookies()

    setLoading(true)
    const fields = formatFields(data)
    await api.post('/projects',
      {
        fields
      },
      {
        headers: {
          'Authorization': token
        }
      }
    )
      .then(async ({data}) => {
        setLoading(false)
        toast({
          title: "Projeto criado com sucesso!",
          status: "success",
          duration: 3000,
          isClosable: true
        })
        await onSubmit()
        onClose()
      })
      .catch((e) => console.error(e))
  }

  return (
    <ChakraModal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent maxW={900}>
        <ModalHeader>Criar projeto</ModalHeader>
        <ModalCloseButton />

        <form onSubmit={handleSubmit(createProject)}>
          <ModalBody
            display="flex"
            flexDir="column"
            gap={5}
          >
              <FormControl>
                <FormLabel>Título</FormLabel>
                <Input
                  {...register('title')}
                  name="title"
                  type="text"
                />
              </FormControl>

              <FormControl>
                <FormLabel>Categoria</FormLabel>
                <Input
                  {...register('category')}
                  name="category"
                  type="text"
                />
              </FormControl>

              <Box
                display="flex"
                gap={2}
              >
                <FormControl>
                  <FormLabel>Link</FormLabel>
                  <Input
                    {...register('link')}
                    name="link"
                    type="text"
                  />
                </FormControl>

                <FormControl>
                  <FormLabel>Repositório</FormLabel>
                  <Input
                    {...register('repositoryUrl')}
                    name="repositoryUrl"
                    type="text"
                  />
                </FormControl>
              </Box>

              <FormControl>
                  <FormLabel>Stacks</FormLabel>
                  <Input
                    {...register('stacks')}
                    name="stacks"
                    type="text"
                  />
                  <FormHelperText>
                    <Text>Separe cada stack por <Kbd>,</Kbd></Text>
                  </FormHelperText>
              </FormControl>

              <FormControl>
                <FormLabel>Descrição</FormLabel>
                <DefaultEditor
                  value={html}
                  onChange={(event) => setHtml(event.target.value)}
                />
              </FormControl>

              <FormControl>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                  marginBottom={5}
                >
                  <FormLabel>Foto</FormLabel>
                  <Button
                    leftIcon={downloadUrl ? <GiConfirmed/> : <GiCloudUpload/>}
                    onClick={handleUploadFile}
                    color="branco"
                    backgroundColor={"green.400"}
                    isLoading={loading}
                    isDisabled={!!!dataFile || !!downloadUrl}
                    _hover={{
                      filter: "brightness(0.8)"
                    }}
                    _disabled={{
                      opacity: "0.6",
                      cursor: "not-allowed"
                    }}
                  >
                    {!downloadUrl ? "Upload" : "Uploaded"}
                  </Button>
                </Box>
                <Input
                  {...register('thumb')}
                  name="thumb"
                  type="file"
                  onChange={(event) => setDataFile(event.target.files[0] || null)}
                />
                <Progress 
                  hasStripe 
                  colorScheme={!downloadUrl ? "purple" : "green"}
                  value={progressUpload} 
                />
              </FormControl>

              <Button
                type="submit"
                color="branco"
                isLoading={loading}
              >
                Criar
              </Button>
          </ModalBody>
        </form>
      </ModalContent>
    </ChakraModal>
  )
}