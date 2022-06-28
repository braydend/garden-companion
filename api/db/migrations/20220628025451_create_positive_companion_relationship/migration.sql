-- CreateTable
CREATE TABLE "_PositiveCompanions" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_PositiveCompanions_A_fkey" FOREIGN KEY ("A") REFERENCES "Plant" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_PositiveCompanions_B_fkey" FOREIGN KEY ("B") REFERENCES "Plant" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "_PositiveCompanions_AB_unique" ON "_PositiveCompanions"("A", "B");

-- CreateIndex
CREATE INDEX "_PositiveCompanions_B_index" ON "_PositiveCompanions"("B");
