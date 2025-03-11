import React from "react"

import { cn } from "@/lib/utils"

const Container: React.FC<React.ComponentProps<"div">> = ({
  className,
  ...props
}) => <div className={cn("container grow", className)} {...props} />

export default Container
